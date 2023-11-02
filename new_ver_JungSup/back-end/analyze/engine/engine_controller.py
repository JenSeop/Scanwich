import os
import json
from .module_fileInformation import file_info_module
from .module_fileClass import file_class_module
from .module_androguard import androguard_module
from .module_virustotal import vt_output_module

vt_key = os.environ.get('VIRUSTOTAL_API_KEY')

def analysis_engine(r_id, f_path):
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