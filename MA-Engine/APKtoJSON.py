#note : 이 코드는 apk을 넣을 때 클래스 이름, 필드(이름), 메서드(이름), 관계(extend, dependency) 등을 json으로 변경하는 코드입니다.
import json
from androguard.core.bytecodes.apk import APK
from androguard.core.bytecodes.dvm import DalvikVMFormat
from androguard.core.analysis.analysis import Analysis
from androguard.decompiler.dad.decompile import DvClass
from androguard.core.analysis.analysis import ClassAnalysis
from androguard.misc import AnalyzeAPK

apk_file_path = "apk path"  #apk파일 위치
a, d, dx = AnalyzeAPK(apk_file_path)  #apk파일의 데이터 객체를 저장함.


data_className = [] #클래스 이름이 들어갈 배열
for i in dx.get_classes():
    data_className.append(i.name[1:])  #클래스 객체에서 클래스 이름을 추출하여 data_className 배열에 넣음.
    

data_classes = [] #메서드 이름이 들어갈 배열
for class_obj in dx.get_classes():
    class_name = class_obj.name[1:].rstrip(';') #클래스 이름을 추출하여 class_name에 저장.
    fields = class_obj.get_fields() #필드 정보를 추출하여 fields에 저장함.
    methods = class_obj.get_methods() #메서드 정보를 추출하여 methods에 저장함.
    
    
    #json에 들어갈 형식을 정함.
    class_info = {
        "name": class_name,
        "properties" : [],
        "method" : []
    }
    
    for field in fields: #필드가 존재할 때 아래 코드를 실행함.
        field_name = field.name  #필드 정보에서 필드 이름을 추출하여 field_name에 저장함.
        field_info = {"name": field_name} #필드가 들어갈 딕셔너리 형식을 정함.
        class_info["properties"].append(field_info) #필드 이름을 class_info 배열에 넣음.
    
    
    for method in methods: #메서드가 존재할 때 아래 코드를 실행함.
        method_name = method.name  #메서드 정보에서 메서드 이름만 추출함.
        
        method_info = {
            "name" : method_name,
            #"accessModifier" : access_flags
        }
        
        class_info["method"].append(method_info) #메서드 이름을 class_info 배열에 넣음.
    data_classes.append(class_info)


data_associate = []  #클래스 관계(extend, dependency)가 들어갈 배열

data_parents = []  #부모 클래스가 들어갈 배열
for j in dx.get_classes():
    data_parents.append(j.extends[1:]) #클래스 객체에서 상속관계에 있는 클래스를 추출하여 data_parents 배열에 넣음.
    
for k,l in zip(data_className,data_parents): #상속관계의 json 형식
    data_associate.append({"from" : k, "to" : l, "type" : "extend"})


#dependency관계에 있는 클래스를 from, to 관계로 출력함.    
for class_obj in dx.get_classes(): #dependency관계에 있는 클래스를 from, to 관계로 출력함.
    methods = class_obj.get_methods() #현재 메서드에서 호출하는 클래스를 추출하기 위해 메서드를 추출함.
    for method in methods:
        xref_to = method.get_xref_to() #현재 메서드에서 호출하는 클래스를 xref_to에 저장함.
        if xref_to: #xref_to이 비어있지 않다면 아래를 실행함.
            for reference in xref_to: #참조에 대한 정보를 추출함.
                from_class = class_obj.name[1:] #from에 해당하는 클래스
                to_class = reference[0].name[1:] #to에 해당하는 클래스
                reference_type = "dependency" #참조 속성을 정함.
                
                if from_class != to_class: #자기 자신과 같지 않은 클래스일 때 다음을 실행함.
                    association = {
                        "from": from_class,
                        "to": to_class,
                        "type": reference_type
                    }
                    data_associate.append(association)


#{association : ["to" : 부모클래스]}가 들어갈 배열
result_dict = {"Classes" : data_classes,"Associations" : data_associate }

#딕셔너리를 json으로 변경함.
json_val = json.dumps(result_dict)

#데이터 양이 많아서 txt 파일로 저장한 후 결과를 확인함.
file = open('APKtoJson.txt', 'w')
file.write(json_val)
file.close()