import requests
import time
import json

def test(api_key, file_path):
    # 바이러스토탈 API Key
    my_apikey = api_key

    # 바이러스 의심 파일 설정
    files = {'file': (file_path, open(file_path, 'rb'))}

    # 바이러스토탈 파일 스캔 주소
    url_scan = 'https://www.virustotal.com/vtapi/v2/file/scan'
    url_scan_params = {'apikey': my_apikey}

    # 바이러스토탈 파일 스캔 시작
    response_scan = requests.post(url_scan, files=files, params=url_scan_params)
    result_scan = response_scan.json()
    scan_resource = result_scan['resource']

    # URL 스캔 후 1분 대기 : 결과가 바로 나오지 않기 때문에 1분 정도 대기
    time.sleep(60)

    # 바이러스토탈 파일 스캔 결과 주소
    url_report = 'https://www.virustotal.com/vtapi/v2/file/report'
    url_report_params = {'apikey': my_apikey, 'resource': scan_resource}

    # 바이러스토탈 파일 스캔 결과 리포트 조회
    response_report = requests.get(url_report, params=url_report_params)

    # 점검 결과 데이터 추출
    report = response_report.json()
    report_scan_date = report.get('scan_date')
    report_scan_sha256 = report.get('sha256')
    report_scan_md5 = report.get('md5')
    report_scan_result = report.get('scans')
    report_scan_vendors = list(report['scans'].keys())
    report_scan_vendors_cnt = len(report_scan_vendors)

    # JSON 형식으로 결과 반환
    result = {
        'verbose_msg': report.get('verbose_msg'),
        'scan_date': report_scan_date,
        'scan_file_sha256': report_scan_sha256,
        'scan_file_md5': report_scan_md5,
        'scan_file_vendor_count': report_scan_vendors_cnt,
        'scan_results': {}
    }

    # 바이러스 스캔 엔진사별 데이터 정리
    for vendor in report_scan_vendors:
        outputs = report_scan_result[vendor]
        outputs_result = report_scan_result[vendor].get('result')
        outputs_version = report_scan_result[vendor].get('version')
        outputs_detected = report_scan_result[vendor].get('detected')
        outputs_update = report_scan_result[vendor].get('update')

        result['scan_results'][vendor] = {
            'Vendor Name': vendor,
            'Vendor Version': outputs_version,
            'Scan Detected': outputs_detected,
            'Scan Result': outputs_result
        }

    return json.dumps(result, indent=4)
