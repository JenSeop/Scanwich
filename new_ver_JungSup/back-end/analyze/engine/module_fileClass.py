from androguard.misc import AnalyzeAPK
import json

def file_class_module(f_path):
    a, d, dx = AnalyzeAPK(f_path)

    data_nomal = [i.name[1:] for i in dx.get_classes()]
    data_parents = [j.extends[1:] for j in dx.get_classes()]

    classes_data = [{"name": n.rstrip(';')} for n in data_nomal]
    extends_data = [{"from": k.rstrip(';'), "to": l.rstrip(';'), "type": "extend"} for k, l in zip(data_nomal, data_parents)]

    result_dict = {"Classes": classes_data, "Associations": extends_data}
    
    return result_dict
