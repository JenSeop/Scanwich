import requests
import time

def vt_report_module(key, resource):
    url = 'https://www.virustotal.com/vtapi/v2/file/report'
    params = {'apikey': key, 'resource': resource}
    
    response = requests.get(url, params=params)
    
    return response.json()

def scanwich_report_format(report):
    vendor_data = {}
    scans = report.get('scans', {})
    detected_count = 0
    
    for vendor, result in scans.items():
        detected = result.get('detected')
        if detected:
            detected_count += 1
        
        vendor_data[vendor] = {
            "detected": detected,
            "result": result.get('result'),
            "update": result.get('update'),
            "version": result.get('version')
        }

    formatted_report = {
        "info": {
            "scan_id": report.get("scan_id"),
            "sha1": report.get("sha1"),
            "resource": report.get("resource"),
            "scan_date": report.get("scan_date"),
        },
        "count": len(scans),
        "score": detected_count,
        "vendor": vendor_data,
    }
    
    return formatted_report

def vt_output_module(key, filepath, max_retries=5):
    time.sleep(10)
    resource = filepath
    report = vt_report_module(key, resource)
        
    if report.get('response_code') == 1:
        formatted_report = scanwich_report_format(report)
        return formatted_report
    
    return {"error": "Maximum retries reached without getting the report."}