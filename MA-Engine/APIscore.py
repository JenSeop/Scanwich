import json

# JSON 파일 경로를 직접 지정
json_file_path = 'Sample.json'

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

# 결과 출력
for category, api_count in category_counts.items():
    print(f"{category} API:")
    for api, count in api_count.items():
        # 특정 API에 대한 추가 조건에 따라 곱셈 적용
        if api == 'getDeviceId':
            count *= 4
        elif api == 'getSimSerialNumber':
            count *= 6
        elif api == 'getSubscriberId':
            count *= 5
        elif api == 'sendTextMessage' or api == 'getMessageBody':
            count *= 9
        elif api == 'delete' or api == 'createFromPdu':
            count *= 3
        elif api == 'getLineNumber':
            count *= 6
        elif api == 'getRunningTasks':
            count *= 7
        elif api in ['getSimOperator', 'getSimOperatorName']:
            count *= 6
        elif api in ['connect']:
            count *= 3
        elif api in ['notify', 'killBackgroundProcesses', 'registerContentObserver']:
            count *= 3
        elif api in ['encode', 'getURL']:
            count *= 3
        print(f'The API "{api}" was called {count} times.')
    print()
