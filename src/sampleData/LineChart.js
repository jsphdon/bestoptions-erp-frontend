// src/LineChart.js
import React from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  // Generate random y-axis values
  const generateRandomValues = (length, min, max) => {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
  };

  // X-axis labels from May 1 to May 30, but showing only every 5th day
  const xAxisLabels = [
    'May 1', 'May 6', 'May 11', 'May 16', 'May 21', 'May 26', 'May 30'
  ];

  // Generate values for every day to maintain data integrity, only show specific labels
  const allXAxisLabels = Array.from({ length: 30 }, (_, i) => `May ${i + 1}`);
  const yAxisValues = [10000, 13500, 17000, 20500, 24000];

  const series = [
    {
      name: 'Sales',
      data: generateRandomValues(30, 10000, 24000),
    },
  ];

  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: allXAxisLabels,
      labels: {
        formatter: function (value, timestamp, index) {
          return xAxisLabels.includes(value) ? value : '';
        }
      }
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value.toLocaleString();
        },
      },
      tickAmount: yAxisValues.length - 1,
      min: yAxisValues[0],
      max: yAxisValues[yAxisValues.length - 1],
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default LineChart;
