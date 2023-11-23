from androguard.misc import AnalyzeAPK

def extract_info(class_obj):
    class_name = class_obj.name[1:].rstrip(';')
    
    if "$" not in class_name and not any(keyword in class_name for keyword in ["android", "com", "kotlin"]):
        fields = class_obj.get_fields()
        methods = class_obj.get_methods()

        class_info = {"name": class_name, "properties": [], "method": []}

        for field in fields:
            if field.name:
                field_info = {"name": field.name}
                class_info["properties"].append(field_info)

        for method in methods:
            if method.name:
                method_info = {"name": method.name}
                class_info["method"].append(method_info)

        return class_info

def class_module(apk_file_path):
    
    try:
        a, d, dx = AnalyzeAPK(apk_file_path)

        data_classes = [extract_info(class_obj) for class_obj in dx.get_classes() if extract_info(class_obj)]

        data_parents = []
        for j in dx.get_classes():
            data_parents.append(j.extends[1:] if j.extends else None)

        data_associate = []
        unique_associations = set()

        for k in dx.get_classes():
            for method in k.get_methods():
                for reference in method.get_xref_to():
                    if reference[0].name[1:] not in data_parents and reference[0].name:
                        if (
                            "$" not in k.name
                            and "$" not in reference[0].name
                            and k.name[1:] != reference[0].name[1:]
                            and not any(keyword in k.name for keyword in ["android", "com", "kotlin", "Object"])
                            and not any(keyword in reference[0].name for keyword in ["android", "com", "kotlin", "Object"])
                        ):
                            association = (k.name[1:], reference[0].name[1:], "dependency")

                            if association not in unique_associations:
                                data_associate.append({"from": association[0], "to": association[1], "type": association[2]})
                                unique_associations.add(association)

        for class_name, parent_class in zip(data_classes, data_parents):
            if parent_class:
                association = (class_name["name"], parent_class, "extend")
                
                if association not in unique_associations:
                    data_associate.append({"from": association[0], "to": association[1], "type": association[2]})
                    unique_associations.add(association)
        
        result_dict = {"Classes": data_classes, "Associations": data_associate}
        
        return result_dict

    except FileNotFoundError:
        print("APK File not found. Please check the file.")
    except Exception as e:
        print("An error occurred:", e)