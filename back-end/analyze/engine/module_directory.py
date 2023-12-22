import zipfile
import os

def list_apk_structure(apk_file_path):
    structure = {}
    with zipfile.ZipFile(apk_file_path, 'r') as apk_zip:
        for file_info in apk_zip.infolist():
            file_path = file_info.filename
            dir_name = os.path.dirname(file_path)
            if not dir_name:
                dir_name = './'
            file_path = file_path.replace(dir_name + '/', '/')
            if dir_name not in structure:
                structure[dir_name] = []
            structure[dir_name].append(file_path)

    return structure

def format_structure(structure, indent=0):
    result = {}
    for key, value in structure.items():
        if isinstance(value, dict):
            result[key] = format_structure(value, indent + 1)
        elif isinstance(value, list):
            result[key] = [item.lstrip('/') for item in value]
        else:
            result[key] = None
    return result

def combine_same_directories(structure):
    new_structure = {}
    for key, value in structure.items():
        parts = key.split('/')
        current_level = new_structure
        for part in parts:
            if part not in current_level:
                current_level[part] = {}
            current_level = current_level[part]

        for item in value:
            item = item.lstrip('/')
            current_level.setdefault(item, None)

    return new_structure

def merge_root_directory(structure):
    if './' in structure:
        root_contents = structure.pop('.')
        structure.update(root_contents)

def structure_module(apk_file_path):
    if apk_file_path.endswith(".apk"):
        apk_structure = list_apk_structure(apk_file_path)
        combined_structure = combine_same_directories(apk_structure)
        merge_root_directory(combined_structure)
        formatted_structure = format_structure(combined_structure)
        return formatted_structure
    else:
        return "올바른 APK 파일이 아닙니다."
