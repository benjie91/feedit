import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class bar extends Component {
  render() {
    var sysID = Array.from(this.props.sysID);
    var count = Array.from(this.props.count);

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
        <h2>Number of messages for each System</h2>
        <Bar
          data={data}
          width={100}
          height={60}
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
