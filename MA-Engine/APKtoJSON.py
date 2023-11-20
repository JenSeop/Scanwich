from androguard.misc import AnalyzeAPK

# 클래스 객체에서 정보(클래스 이름, 필드, 메서드)를 추출하는 함수.
def extract_info(class_obj):
    # 클래스 객체에서 클래스 이름을 추출하고 불필요한 문자를 제거하여 class_name 변수에 저장
    class_name = class_obj.name[1:].rstrip(';')

    # 불필요한 클래스를 걸러내는 조건문
    if "$" not in class_name and not any(keyword in class_name for keyword in ["android", "com", "kotlin"]):
        # 클래스 객체에서 필드와 메서드 객체를 추출
        fields = class_obj.get_fields()
        methods = class_obj.get_methods()

        # class_info 딕셔너리 초기화
        class_info = {"name": class_name, "properties": [], "method": []}

        # 필드 정보 추출
        for field in fields:
            # 필드 이름이 null이 아닌 경우에만 추가
            if field.name:
                # 필드 이름을 추출하여 딕셔너리에 추가
                field_info = {"name": field.name}
                class_info["properties"].append(field_info)

        # 메서드 정보 추출
        for method in methods:
            # 메서드 이름이 null이 아닌 경우에만 추가
            if method.name:
                # 메서드 이름을 추출하여 딕셔너리에 추가
                method_info = {"name": method.name}
                class_info["method"].append(method_info)

        return class_info

def class_module(apk_file_path):

    try:
        # APK 파일 분석
        a, d, dx = AnalyzeAPK(apk_file_path)

        # 각 클래스에 대한 정보 추출
        data_classes = [extract_info(class_obj) for class_obj in dx.get_classes() if extract_info(class_obj)]

        # 부모 클래스 정보 추출
        data_parents = []
        for j in dx.get_classes():
            data_parents.append(j.extends[1:])

        # 상속 관계를 data_associate 배열에 추가
        data_associate = []
        for k in dx.get_classes():
            for method in k.get_methods():
                for reference in method.get_xref_to():
                    if (
                        "$" not in k.name
                        and "$" not in reference[0].name
                        and k.name[1:] != reference[0].name[1:]
                        and not any(keyword in k.name for keyword in ["android", "com", "kotlin"])
                        and not any(keyword in reference[0].name for keyword in ["android", "com", "kotlin"])
                    ):
                        association = {"from": k.name[1:], "to": reference[0].name[1:], "type": "dependency"}

                        # 중복된 관계가 아닌 경우에만 추가
                        if association not in data_associate:
                            data_associate.append(association)

        # 부모 클래스 정보를 상속 관계로 추가 (중복 방지)
        for class_name, parent_class in zip(data_classes, data_parents):
            association = {"from": class_name["name"], "to": parent_class, "type": "extend"}
            
            # 중복된 관계인지 확인
            if association not in data_associate:
                data_associate.append(association)
        
        # 추출된 정보를 포함하는 딕셔너리 생성
        result_dict = {"Classes": data_classes, "Associations": data_associate}

        return result_dict

    except FileNotFoundError:
        print("APK File not found. Please check the file.")
    except Exception as e:
        print("An error occurred:", e)