import json
from androguard.core.bytecodes.apk import APK
from androguard.core.bytecodes.dvm import DalvikVMFormat
from androguard.misc import AnalyzeAPK

apk_file_path = "apk_path"  # apk파일 위치
try:
    a, d, dx = AnalyzeAPK(apk_file_path)  #apk파일의 데이터 객체를 저장함.

    data_className = []  # 클래스 이름이 들어갈 배열
    for i in dx.get_classes():
        class_name = i.name[1:]
        data_className.append(class_name)

    data_classes = []  # 메서드 이름이 들어갈 배열
    for class_obj in dx.get_classes():
        class_name = class_obj.name[1:].rstrip(';')
        if "$" not in class_name and not "android" in class_name and not "androidx" in class_name and not "com" in class_name:  # 클래스 이름에 $가 없는 경우에만 처리
            fields = class_obj.get_fields() #필드 정보를 추출하여 fields에 저장함.
            methods = class_obj.get_methods() #메서드 정보를 추출하여 methods에 저장함.

            class_info = {
                "Classname": class_name,
                "properties": [],
                "method": []
            }

            for field in fields: #필드가 존재할 때 아래 코드를 실행함.
                field_name = field.name #필드 정보에서 필드 이름을 추출하여 field_name에 저장함.
                field_info = {"name": field_name} #필드가 들어갈 딕셔너리 형식을 정함.
                class_info["properties"].append(field_info) #필드 이름을 class_info 배열에 넣음.

            for method in methods: #메서드가 존재할 때 아래 코드를 실행함.
                method_name = method.name #메서드 정보에서 메서드 이름만 추출함.
                method_info = {
                    "name": method_name
                }
                class_info["method"].append(method_info) #메서드 이름을 class_info 배열에 넣음.
            data_classes.append(class_info)

    data_associate = []  # 클래스 관계(extend, dependency)가 들어갈 배열

    data_parents = []  # 부모 클래스가 들어갈 배열
    for j in dx.get_classes():
        data_parents.append(j.extends[1:])    
    for k, l in zip(data_className, data_parents): #상속관계의 json 형식
        if "$" not in k and "$" not in l and not "android" in k and not "android" in l and not "com" in k and not "com" in l:
            data_associate.append({"from": k, "to": l, "type": "extend"})

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

                    if "$" not in from_class and "$" not in to_class and from_class != to_class and not "android" in from_class and not "android" in to_class and not "com" in from_class and not "com" in to_class: #자기 자신과 같지 않은 클래스일 때 다음을 실행함.
                        association = {
                            "from": from_class,
                            "to": to_class,
                            "type": reference_type
                        }
                        data_associate.append(association)
                        
    result_dict = {"Classes": data_classes, "Associations": data_associate}

    json_val = json.dumps(result_dict)

    file = open('APKtoJson2.txt', 'w')
    file.write(json_val)
    file.close()
except FileNotFoundError:
    print("APK File not found. Please check the file.")
except Exception as e:
    if "Requested API level 31 is larger than maximum we have" in str(e):
        print("SDK version error. Processing aborted.")
        
    else:
        print("An error occurred:", e)