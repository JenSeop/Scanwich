import json
from androguard.misc import AnalyzeAPK

#클래스 객체에서 정보(클래스 이름, 필드, 메서드)를 추출하는 함수.
def extract_info(class_obj):  #클래스 객체에서 정보를 추출함.
    class_name = class_obj.name[1:].rstrip(';') #클래스 객체에서 클래스 이름을 추출해서 class_name에 넣음.

    if "$" not in class_name and not any(keyword in class_name for keyword in ["android", "com", "kotlin"]): #불필요한 클래스를 걸러냄.
        fields = class_obj.get_fields() #클래스 객체에서 필드 객체를 추출해서 class_name에 넣음.
        methods = class_obj.get_methods() #클래스 객체에서 메서드 객체를 추출해서 methods에 넣음.

        # class_info 딕셔너리 초기화
        class_info = {"name": class_name, "properties": [], "method": []}

        # 필드 정보 추출
        for field in fields:
            if field.name: #null이 아닌 경우에만 추가
                field_info = {"name": field.name} #필드 객체에서 필드 이름을 추출함.
                class_info["properties"].append(field_info) #딕셔너리 properties 키에 field_info를 추가함.

        # 메서드 정보 추출
        for method in methods:
            if method.name:
                method_info = {"name": method.name} #메서드 객체에서 메서드 이름을 추출함.
                class_info["method"].append(method_info) #딕셔너리 method 키에 method_info를 추가함.

        return class_info

def main():
    # APK 파일 경로
    apk_file_path = "apk_sample.apk"

    try:
        # APK 파일 분석
        a, d, dx = AnalyzeAPK(apk_file_path)

        # 각 클래스에 대한 정보 추출
        data_classes = [extract_info(class_obj) for class_obj in dx.get_classes() if extract_info(class_obj)]

        # 의존성 관계 추출
        data_associate = [
            {"from": k.name[1:], "to": reference[0].name[1:], "type": "dependency"}
            for k in dx.get_classes() #클래스 객체를 추출함
            for method in k.get_methods() #클래스 객체에서 메서드 객체를 추출함
            for reference in method.get_xref_to() #메서드 객체에서 의존성 관계를 추출함.
            if "$" not in k.name and "$" not in reference[0].name and k.name[1:] != reference[0].name[1:]
            and not any(keyword in k.name for keyword in ["android", "com", "kotlin"])
            and not any(keyword in reference[0].name for keyword in ["android", "com", "kotlin"])
        ]

        # 추출된 정보를 포함하는 딕셔너리 생성
        result_dict = {"Classes": data_classes, "Associations": data_associate}

        # 딕셔너리를 JSON 형식으로 변환
        json_val = json.dumps(result_dict, ensure_ascii=False)

        # JSON 데이터를 파일에 쓰기
        with open('APKtoJson.json', 'w', encoding='utf-8') as file:
            file.write(json_val)

    except FileNotFoundError:
        print("APK File not found. Please check the file.")
    except Exception as e:
        print("An error occurred:", e)

if __name__ == "__main__":
    main()
