import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Score = ({data}) => {
  const options = {
    chart: {
      height: 350,
      type: 'radar', // 레이더 차트 유형
    },
    xaxis: {
      categories: ['SMS', 'Linux', 'Device', '네트워크', 'Privacy', 'FileAccess'], // x 축 카테고리
    },
    dataLabels: {
      enabled: true, // 데이터 라벨 활성화
      background: {
        enabled: true,
        borderRadius: 10, // 라벨 배경의 모서리 반경
        borderWidth: 1, // 라벨 배경의 테두리 두께
        borderColor: '#e9e9e9', // 라벨 배경의 테두리 색상
        opacity: 0.7, // 라벨 배경의 불투명도
      },
      style: {
        fontSize: '12px', // 라벨 텍스트 크기
        fontWeight: 'bold', // 라벨 텍스트 굵기
        colors: ['#000'], // 텍스트 색상
      },
    },
    plotOptions: {
      radar: {
        size: 110, // 레이더 차트 크기
        polygons: {
          strokeColors: '#e9e9e9', // 다각형 테두리 색상
          fill: {
            colors: ['#f8f8f8', '#fff'], // 다각형 채우기 색상
          },
        },
      },
    },
    colors: ['#28E070'], // 라인 및 마커 색상
    markers: {
      size: 5, // 마커 크기
      colors: ['#28E070'], // 마커 색상
      strokeColor: '#28E070', // 마커 테두리 색상
      strokeWidth: 2, // 마커 테두리 두께
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    yaxis: {
      tickAmount: 10, // y 축 눈금 개수
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val;
          } else {
            return '';
          }
        },
      },
    },
  };
  
  return (
    <div className="radar-chart">
      <ReactApexChart options={options} series={data} type="radar" height="180%" width="90%"/>
    </div>
  );
};

export default Score;
