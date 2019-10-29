import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class bar extends Component {
  render() {
    //Produce an array of the distinct system IDs
    const sysID = this.props.feedbackData
      .map(feedbackData => feedbackData.sid)
      .filter((value, index, self) => self.indexOf(value) === index);

    //Produce an array of the count for each system ID
    let count = this.props.feedbackData.reduce(
      (acc, o) => ((acc[o.sid] = (acc[o.sid] || 0) + 1), acc),
      {},
    );

    count = Object.values(count);

    var data = {
      labels: sysID,
      datasets: [
        {
          label: 'My First dataset',
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
        <h3>Unread</h3>
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
                  },
                },
              ],
            },
            maintainAspectRatio: true,
          }}
        />
      </div>
    );
  }
}
