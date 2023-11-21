import json

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

# 각 API 카테고리의 호출 횟수 저장할 딕셔너리 초기화
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

# 결과 출력 및 딕셔너리에 반영
for category, api_count in category_counts.items():
    print(f"{category} API:")
    for api, count in api_count.items():
        # API 위험도에 따른 가중치 곱셈 및 딕셔너리에 반영함
        if api == 'getDeviceId':
            category_counts[category][api] *= 4
        elif api == 'getSimSerialNumber':
            category_counts[category][api] *= 6
        elif api == 'getSubscriberId':
            category_counts[category][api] *= 5
        elif api == 'sendTextMessage' or api == 'getMessageBody':
            category_counts[category][api] *= 9
        elif api == 'delete' or api == 'createFromPdu':
            category_counts[category][api] *= 3
        elif api == 'getLineNumber':
            category_counts[category][api] *= 6
        elif api == 'getRunningTasks':
            category_counts[category][api] *= 7
        elif api in ['getSimOperator', 'getSimOperatorName']:
            category_counts[category][api] *= 6
        elif api in ['connect']:
            category_counts[category][api] *= 3
        elif api in ['notify', 'killBackgroundProcesses', 'registerContentObserver']:
            category_counts[category][api] *= 3
        elif api in ['encode', 'getURL']:
            category_counts[category][api] *= 3
        print(f'The Threat score for this "{api}" is {category_counts[category][api]}')
    print()


# 각 카테고리에 속하는 값들을 모두 더함
print("The total scores for each category are as follows: ")
device_sum = sum(category_counts['Privacy'].values())
print(f"'Privacy' category Score is {device_sum}")

device_sum = sum(category_counts['SMS'].values())
print(f"'SMS' category Score is {device_sum}")

device_sum = sum(category_counts['Linux'].values())
print(f"'Linux' category Score is {device_sum}")

device_sum = sum(category_counts['FileAccess'].values())
print(f"'FileAccess' category Score is {device_sum}")

device_sum = sum(category_counts['Device'].values())
print(f"'Device' category Score is {device_sum}")

device_sum = sum(category_counts['Network'].values())
print(f"'Network' category Score is {device_sum}")