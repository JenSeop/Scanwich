import dexofuzzy

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
