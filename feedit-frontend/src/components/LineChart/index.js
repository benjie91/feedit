import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';

export default class line extends Component {
  render() {
    let lineTitle = this.props.lineTitle;

    // const lineData = this.props.feedbackData.reduce(
    //   (accumulator, currentValue) => {
    //     // const date = moment(currentValue.timestamp).format('MM/YY');
    //     const date = moment(currentValue.timestamp.toString()).format('DD/MM');
    //
    //     if (accumulator[date] === undefined) accumulator[date] = 1;
    //     else accumulator[date] = accumulator[date] + 1;
    //
    //     return accumulator;
    //   },
    //   {},
    // );

    let timestamp = this.props.feedbackData.map(feedbackData =>
      feedbackData.timestamp.toString(),
    );

    //I probably will not be using Date.now(), will delete later when sure don't need it
    // let now = Date.now();
    // msSinceMidnight is the amount of ms that has past since the start of the day
    let msSinceMidnight = new Date() - new Date().setHours(0, 0, 0, 0);
    let eightDaysStart = Date.now() - 60 * 60 * 24 * 1000 * 8 - msSinceMidnight;
    let sevenDaysStart = Date.now() - 60 * 60 * 24 * 1000 * 7 - msSinceMidnight;
    let sixDaysStart = Date.now() - 60 * 60 * 24 * 1000 * 6 - msSinceMidnight;
    let fiveDaysStart = Date.now() - 60 * 60 * 24 * 1000 * 5 - msSinceMidnight;
    let fourDaysStart = Date.now() - 60 * 60 * 24 * 1000 * 4 - msSinceMidnight;
    let threeDaysStart = Date.now() - 60 * 60 * 24 * 1000 * 3 - msSinceMidnight;
    let twoDaysStart = Date.now() - 60 * 60 * 24 * 1000 * 2 - msSinceMidnight;
    let oneDayStart = Date.now() - 60 * 60 * 24 * 1000 - msSinceMidnight;

    //For count, first element will be the number of feedback from the start of yesterday to the end of yesterday
    let values = [0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < this.props.feedbackData.length; i++) {
      //feedbackDate is the number of milliseconds that have passed for the current timestamp in question
      let feedbackDate = Date.parse(timestamp[i]);
      // Make sure that the date is before the current date and within the current week
      if (
        feedbackDate < new Date().setHours(0, 0, 0, 0) &&
        feedbackDate > eightDaysStart
      ) {
        if (feedbackDate > oneDayStart) {
          values[6]++; //For the whole of 1 day ago
        } else if (feedbackDate > twoDaysStart) {
          values[5]++; //For the whole of 2 days ago
        } else if (feedbackDate > threeDaysStart) {
          values[4]++; //For the whole of 3 days ago
        } else if (feedbackDate > fourDaysStart) {
          values[3]++; //For the whole of 4 days ago
        } else if (feedbackDate > fiveDaysStart) {
          values[2]++; //For the whole of 5 days ago
        } else if (feedbackDate > sixDaysStart) {
          values[1]++; //For the whole of 6 days ago
        } else if (feedbackDate > sevenDaysStart) {
          values[0]++; //For the whole of 7 days ago
        }
      }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    let labels = [];
    let time = Date.now();
    for (let i = 0; i < 7; i++) {
      time = time - 60 * 60 * 24 * 1000;
      let date = new Date(time);
      labels[6 - i] = moment(date.toString()).format('DD/MM');
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    // const labels = Object.keys(lineData);
    // const values = Object.values(lineData);

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
        {/*<h6>Hi</h6>*/}
      </div>
    );
  }
}
