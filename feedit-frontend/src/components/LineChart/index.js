import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';

export default class line extends Component {
  render() {
    let lineTitle = this.props.lineTitle;

    const lineData = this.props.feedbackData.reduce(
      (accumulator, currentValue) => {
        const date = moment(currentValue.timestamp).format('MM/YYYY');

        if (accumulator[date] === undefined) accumulator[date] = 0;
        else accumulator[date] = accumulator[date] + 1;

        return accumulator;
      },
      {},
    );

    const labels = Object.keys(lineData);
    const values = Object.values(lineData);

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
        <h3>{lineTitle}</h3>
        <Line
          data={lineDefinition}
          options={{
            title: {
              display: false,
              text: lineTitle,
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
          }}
        />
      </div>
    );
  }
}
