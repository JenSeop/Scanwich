import React from 'react';
import ReactApexChart from 'react-apexcharts';

const Score = ({data}) => {
  const options = {
    chart: {
      height: 350,
      type: 'radar',
    },
    xaxis: {
      categories: ['SMS', 'Linux', 'Device', 'Network', 'Privacy', 'FileAccess'],
    },
    dataLabels: {
      enabled: true
    },
    plotOptions: {
      radar: {
        size: 105,
        polygons: {
          strokeColors: '#e9e9e9',
          fill: {
            colors: ['#f8f8f8', '#fff']
          }
        }
      }
    },
    colors: ['#28E070'],
    markers: {
      size: 4,
      colors: ['#28E070'],
      strokeColor: '#28E070',
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val
        }
      }
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function(val, i) {
          if (i % 2 === 0) {
            return val
          } else {
            return ''
          }
        }
      }
    }
  };
  
  return (
    <div className="radar-chart">
      <ReactApexChart options={options} series={data} type="radar" height="180%" width="90%"/>
    </div>
  );
};

export default Score;
