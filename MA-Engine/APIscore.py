import json

def apply_threat_score(api_name, category_counts):
    threat_scores = {
        'getDeviceId': 4,
        'getSimSerialNumber': 6,
        'getSubscriberId': 5,
        'sendTextMessage': 9,
        'getMessageBody': 9,
        'delete': 3,
        'createFromPdu': 3,
        'getLineNumber': 6,
        'getRunningTasks': 7,
        'getSimOperator': 6,
        'getSimOperatorName': 6,
        'connect': 3,
        'notify': 3,
        'killBackgroundProcesses': 3,
        'registerContentObserver': 3,
        'encode': 3,
        'getURL': 3,
    }
    return threat_scores.get(api_name, 1)  # Default score is 1 if not found

def print_threat_scores(category_counts):
    for category, api_count in category_counts.items():
        print(f"{category} API:")
        for api, count in api_count.items():
            threat_score = apply_threat_score(api, category_counts[category])
            category_counts[category][api] *= threat_score
            print(f'The Threat score for "{api}" is {category_counts[category][api]}')
        print()

def print_category_scores(category, category_counts):
    device_sum = sum(category_counts[category].values())
    category_score = min(device_sum, 100)
    print(f"'{category}' category Score is {category_score}")

# JSON 파일 경로를 직접 지정
json_file_path = 'APKtoJson.json'

# JSON 파일을 읽어와서 파싱
with open(json_file_path, 'r') as json_file:
    json_data = json.load(json_file)

# 각 API 호출 횟수를 저장할 딕셔너리
api_categories = {
    'Privacy': ['getDeviceId', 'getSimSerialNumber', 'getSubscriberId'],
    'SMS': ['sendTextMessage', 'getMessageBody'],
    'Linux': ['su', 'du', 'gzip', 'mkdir', 'chmod', 'chown', 'cp'],
    'FileAccess': ['delete', 'createFromPdu'],
    'Device': ['getLineNumber', 'getLatitude', 'getLongitude', 'getRunningTasks',
               'getSimOperator', 'getSimOperatorName', 'connect', 'notify',
               'killBackgroundProcesses', 'registerContentObserver'],
    'Network': ['encode', 'getURL']
}

# 각 API 카테고리의 호출 횟수 저장할 딕셔너리 초기화. 각 key를 0으로 초기화.
category_counts = {category: {api: 0 for api in apis} for category, apis in api_categories.items()}

# 각 클래스의 메서드를 확인하여 특정 API 호출 횟수를 세기
for class_info in json_data['Classes']:
    methods = class_info.get('method', [])
    for method in methods:
        api_name = method.get('name')
        # 어떤 카테고리에 속하는지 확인하고 호출 횟수 증가
        for category, apis in api_categories.items():
            if api_name in apis:
                category_counts[category][api_name] += 1

# api 호출 횟수를 출력하고 위험도에 따라 가중치를 곱함.
print_threat_scores(category_counts)

# Privacy 카테고리에 속하는 값들을 모두 더해서 Privacy_score에 저장
privacy_category = 'Privacy'
privacy_sum = sum(category_counts[privacy_category].values())
Privacy_score = min(privacy_sum, 100)
print(f"'{privacy_category}' category Score is {Privacy_score}")

# SMS 카테고리에 속하는 값들을 모두 더해서 SMS_score에 저장
sms_category = 'SMS'
sms_sum = sum(category_counts[sms_category].values())
SMS_score = min(sms_sum, 100)
print(f"'{sms_category}' category Score is {SMS_score}")

# Linux 카테고리에 속하는 값들을 모두 더해서 Linux_score 저장
linux_category = 'Linux'
linux_sum = sum(category_counts[linux_category].values())
Linux_score = min(linux_sum, 100)
print(f"'{linux_category}' category Score is {Linux_score}")

# FileAccess 카테고리에 속하는 값들을 모두 더해서 Privacy_score에 저장
fileAcess_category = 'FileAccess'
fileAcess_sum = sum(category_counts[fileAcess_category].values())
FileAcess_score = min(fileAcess_sum, 100)
print(f"'{fileAcess_category}' category Score is {FileAcess_score}")

# Device 카테고리에 속하는 값들을 모두 더해서 Device_score에 저장
device_category = 'Device'
device_sum = sum(category_counts[device_category].values())
Device_score = min(device_sum, 100)
print(f"'{device_category}' category Score is {Device_score}")

# Network 카테고리에 속하는 값들을 모두 더해서 Network_score 저장
network_category = 'Network'
network_sum = sum(category_counts[network_category].values())
Network_score = min(network_sum, 100)
print(f"'{network_category}' category Score is {Network_score}")