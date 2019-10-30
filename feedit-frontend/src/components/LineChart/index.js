import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class line extends Component {
  render() {
    const sysID = this.props.feedbackData.map(feedbackData =>
      feedbackData.ts.substr(0, 5),
    );

    let count = sysID.reduce(
      (acc, o) => ((acc[o] = (acc[o] || 0) + 1), acc),
      {},
    );

    let arr1 = Object.keys(count);
    let arr2 = Object.values(count);

    var data = {
      labels: arr1,
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
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
          data: arr2,
        },
      ],
    };
    return (
      <div>
        <h3>Past Week</h3>
        <Line
          data={data}
          options={{
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
          }}
        />
      </div>
    );
  }
}
