import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ systemData, feedbackData, pastDateRange, systemId }) => {
  let filteredFeedbackData = feedbackData;
  if (systemId !== 'All') {
    filteredFeedbackData = filteredFeedbackData.filter(
      data => data.systemId === systemId,
    );
  }

  let timestamp = filteredFeedbackData.map(feedbackData =>
    feedbackData.timestamp.toString(),
  );

  let now = Date.now();
  let yesterday = Date.now() - 60 * 60 * 24 * 1000;
  let sixteenHours = Date.now() - 60 * 60 * 16 * 1000;
  let twelveHours = Date.now() - 60 * 60 * 12 * 1000;
  let sixHours = Date.now() - 60 * 60 * 6 * 1000;

  let count = [0, 0, 0, 0]; //First is 18-24, ..., Last is 0-6

  for (let i = 0; i < filteredFeedbackData.length; i++) {
    let feedbackDate = Date.parse(timestamp[i]);
    if (feedbackDate > sixHours && feedbackDate <= now) {
      count[3]++;
    } else if (feedbackDate > twelveHours && feedbackDate <= now) {
      count[2]++;
    } else if (feedbackDate > sixteenHours && feedbackDate <= now) {
      count[1]++;
    } else if (feedbackDate > yesterday && feedbackDate <= now) {
      count[0]++;
    }
  }

  var data = {
    labels: ['0 - 6 hrs', '6 - 12 hrs', '12 - 18 hrs', '18 - 24 hrs'],
    datasets: [
      {
        label: 'Feedback',
        backgroundColor: 'rgba(25, 25, 255,0.2)',
        borderColor: 'rgba(25, 25, 255,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(25, 25, 255,0.4)',
        hoverBorderColor: 'rgba(25, 25, 255,1)',
        data: count,
      },
    ],
  };
  return (
    <div>
      <h3>{`Past Day - ${
        systemId !== 'All'
          ? systemData.find(data => data.systemId === systemId).systemName
          : 'All Systems'
      }`}</h3>
      <Bar
        data={data}
        width={100}
        height={50}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  min: 0,
                  userCallback: function(label) {
                    if (Math.floor(label) === label) {
                      return label;
                    }
                  },
                },
              },
            ],
          },
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
};

export default BarChart;
