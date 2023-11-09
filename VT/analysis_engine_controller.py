import json
from fileInformation_module import file_info_module
from fileClass_module import file_class_module
from androguard_module import androguard_module
from virustotal_module import vt_output_module

def analysis_engine(f_path, vt_key, r_id):
  print(f"Activated Engine - report({r_id}) - f_path({f_path})")
  
  file_info = file_info_module(f_path)
  file_info_dict = json.loads(file_info)
  f_sha256 = file_info_dict.get("f_sha256", "")
    
  return {
    "file_info": file_info,
    "file_classes": file_class_module(f_path),
    "vt_data": vt_output_module(vt_key, f_sha256),
    "androguard_data": androguard_module(r_id, f_path),
  }

f_path = "./MalwareBazaar Database.apk"
vt_key_01 = "3e5c3558012e62fa99be12e53d85a76c3db95f8c9d4fdd7bd51c6564d4697db2"
vt_key_02 = "1eb937d5b99b8521aeb514a06c195a9bc7016ccc7f35198b18a39206845e1bb5"
r_id = "1"

print(analysis_engine(f_path, vt_key_01,r_id))