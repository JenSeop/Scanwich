// ExcelExport.js
import * as XLSX from 'xlsx';

export function exportToExcel(data) {
  // 새 워크북 생성
  const workbook = XLSX.utils.book_new();
  
  // 데이터를 워크시트로 변환
  const worksheet = XLSX.utils.json_to_sheet(data);
  
  // 워크북에 워크시트 추가
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  
  // 워크북에서 blob 생성
  const blob = XLSX.write(workbook, { bookType: 'xlsx', type: 'blob' });
  
  // blob을 URL로 생성
  const url = URL.createObjectURL(blob);
  
  // 다운로드 링크를 만들고 클릭 이벤트를 트리거
  const a = document.createElement('a');
  a.href = url;
  a.download = 'exported_data.xlsx';
  a.click();
  
  // 리소스를 해제하기 위해 URL 폐기
  URL.revokeObjectURL(url);
}
