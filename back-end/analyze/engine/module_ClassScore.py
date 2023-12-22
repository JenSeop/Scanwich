def apply_threat_score(api_name):
    threat_scores = {
        'getDeviceId': 4, 'getSimSerialNumber': 6, 'getSubscriberId': 5,
        'sendTextMessage': 9, 'getMessageBody': 9, 'delete': 3, 'createFromPdu': 3,
        'getLineNumber': 6, 'getRunningTasks': 7, 'getSimOperator': 6,
        'getSimOperatorName': 6, 'connect': 3, 'notify': 3,
        'killBackgroundProcesses': 3, 'registerContentObserver': 3,
        'encode': 3, 'getURL': 3,
    }
    return threat_scores.get(api_name, 1)

def calculate_category_score(category_counts):
    return {category: min(sum(api_count.values()), 100) for category, api_count in category_counts.items()}

def calculate_threat_scores(category_counts):
    for category, api_count in category_counts.items():
        for api, count in api_count.items():
            threat_score = apply_threat_score(api)
            category_counts[category][api] *= threat_score
    return category_counts

def class_score_module(data):
    api_categories = {
        'Privacy': ['getDeviceId', 'getSimSerialNumber', 'getSubscriberId'],
        'SMS': ['sendTextMessage', 'getMessageBody'],
        'Linux': ['su', 'du', 'gzip', 'mkdir', 'chmod', 'chown', 'cp'],
        'FileAccess': ['delete', 'createFromPdu'],
        'Device': ['getLineNumber', 'getLatitude', 'getLongitude', 'getRunningTasks', 'getSimOperator', 'getSimOperatorName', 'connect', 'notify', 'killBackgroundProcesses', 'registerContentObserver'],
        'Network': ['encode', 'getURL']
    }

    category_counts = {category: {api: 0 for api in apis} for category, apis in api_categories.items()}

    for class_info in data['Classes']:
        methods = class_info.get('method', [])
        for method in methods:
            api_name = method.get('name')
            for category, apis in api_categories.items():
                if api_name in apis:
                    category_counts[category][api_name] += 1

    modified_category_counts = calculate_threat_scores(category_counts)
    category_scores = calculate_category_score(modified_category_counts)
    
    result = {
        'category_scores': category_scores,
        'detections': {}
    }

    for category, apis in api_categories.items():
        result['detections'][category] = [api for api in apis if category_counts[category][api] > 0]

    return result
