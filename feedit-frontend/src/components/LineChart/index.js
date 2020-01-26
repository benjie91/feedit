import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row } from 'react-bootstrap';

import moment from 'moment';

const LineChart = ({ systemData, feedbackData, pastDateRange, systemId }) => {
  let filteredFeedbackData = feedbackData;
  if (systemId !== 'All') {
    filteredFeedbackData = filteredFeedbackData.filter(
      data => data.systemId === systemId,
    );
  }

  let days = 0;
  if (pastDateRange === 'Week') days = 7;
  else if (pastDateRange === 'Year') days = 365;

  if (pastDateRange !== '') {
    filteredFeedbackData = filteredFeedbackData.filter(data =>
      moment(data.timestamp).isAfter(moment().subtract(days, 'days')),
    );
  }

  const aggregatedData = filteredFeedbackData.reduce(
    (accumulator, currentData) => {
      if (pastDateRange === 'Week') {
        const date = moment(currentData.timestamp).format('DD MMM');
        if (!accumulator[date]) accumulator[date] = 1;
        else accumulator[date]++;
        return accumulator;
      } else if (pastDateRange === 'Year') {
        const date = moment(currentData.timestamp).format('MMM YY');
        if (!accumulator[date]) accumulator[date] = 1;
        else accumulator[date]++;
        return accumulator;
      } else {
        const date = moment(currentData.timestamp).format('MMM YY');
        if (!accumulator[date]) accumulator[date] = 1;
        else accumulator[date]++;
        return accumulator;
      }
    },
    {},
  );

  const labels = Object.keys(aggregatedData);
  const values = Object.values(aggregatedData);

  const lineDefinition = {
    labels,
    datasets: [
      {
        label: 'Feedback',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: values,
      },
    ],
  };

  return (
    <div>
      <h3>{`Past ${pastDateRange} - ${
        systemId !== 'All'
          ? systemData.find(data => data.systemId === systemId).systemName
          : 'All Systems'
      }`}</h3>
      <Line
        data={lineDefinition}
        options={{
          title: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                },
              },
            ],
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default LineChart;
