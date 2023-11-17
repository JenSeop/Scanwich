import os
import json
from .module_fileInformation import file_info_module
from .module_fileClass import file_class_module
from .module_androguard import androguard_module
from .module_virustotal import vt_output_module
from .module_directory import structure_module
from .module_Class import class_module

vt_key = os.environ.get('VIRUSTOTAL_API_KEY')

def analysis_engine(r_id, f_path):
  print(f"Activated Engine - report({r_id}) - f_path({f_path})")
  
  file_info = file_info_module(f_path)
  f_sha256 = file_info.get("f_sha256", "")
  structure_data = structure_module(f_path)
  file_classes = class_module(f_path)
  vt_data = vt_output_module(vt_key, f_sha256)
  androguard_data = androguard_module(r_id, f_path)
    
  return {
    "file_info": file_info,
    "file_classes": file_classes,
    "structure_data": structure_data,
    "vt_data": vt_data,
    "androguard_data": androguard_data,
  }