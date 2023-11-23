import dexofuzzy
from .models import AnalyzeReport

def dex_hash_calc_module(path):
    try:
        return dexofuzzy.hash_from_file(path)
    except Exception as e:
        return f"Error-{e}"

def dex_hash_compare_module(hash1, hash2):
    try:
        return dexofuzzy.compare(hash1, hash2)
    except Exception as e:
        return f"Error-{e}"

def dexo_compare_all(f_r_id, f_dexo_hash):
    reports = AnalyzeReport.objects.filter(r_status="true").exclude(r_id=f_r_id)
    aft_comp = {}
    seen_hashes = set()
    
    for id in range(len(reports)):
        report = reports[id]
        t_r_id = report.r_id
        t_r_data = report.r_data
        t_dexo_hash = report.r_data.get("dexo_hash", "")
        result = dex_hash_compare_module(f_dexo_hash, t_dexo_hash)
        
        if result != 0 and result != 100 and not isinstance(result, str):
            if t_dexo_hash in seen_hashes:
                continue
            
            aft_comp[id] = {'r_id': t_r_id, 'r_data': t_r_data, 'result': result}
            seen_hashes.add(t_dexo_hash)
        
    return aft_comp