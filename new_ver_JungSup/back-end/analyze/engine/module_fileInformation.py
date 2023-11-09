import os
import hashlib

def file_info_module(f_path):
    
    if not os.path.exists(f_path):
        return json.dumps({"error": "File does not exist!"})
    
    with open(f_path, 'rb') as f:
        file_content = f.read()

        sha256_hash = hashlib.sha256(file_content).hexdigest()
        md5_hash = hashlib.md5(file_content).hexdigest()
        
    file_info = {
        "f_name": os.path.basename(f_path),
        "f_size": os.path.getsize(f_path),
        "f_type": "APK" if f_path.endswith(".apk") else "Unknown",
        "f_path": f_path,
        "f_sha256": sha256_hash,
        "f_md5": md5_hash,
    }

    return file_info
