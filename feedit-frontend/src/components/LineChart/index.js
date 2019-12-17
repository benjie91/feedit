import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row } from 'react-bootstrap';
import moment from 'moment';

export default class line extends Component {
  render() {
    let lineTitle = this.props.lineTitle;

    let timestamp = this.props.feedbackData.map(feedbackData =>
      feedbackData.timestamp.toString(),
    );

    ////////////////////////////////////////////////////////////////////////////////////////////////
    let labels = [];
    let month = moment(Date.now()).format('MM');
    let year = moment(Date.now()).format('YY');
    // let month = moment(Date.now()).format('MM/YY');
    for (let i = 0; i < 12; i++) {
      month--;
      if (month == 0) {
        month = 12;
        year--;
      }
      if (month < 10) {
        labels[11 - i] = '0' + month + '/' + year;
      } else {
        labels[11 - i] = month + '/' + year;
      }
    }

    //For count, first element will be the number of feedback from the start of yesterday to the end of yesterday
    let values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Stores the previous 12 months

    for (let i = 0; i < this.props.feedbackData.length; i++) {
      // // //feedbackDate is the number of milliseconds that have passed for the current timestamp in question
      // let feedbackDate = Date.parse(timestamp[i]);
      // // Make sure that the date is before the current date and within the current week
      // if (
      //   feedbackDate < new Date().setHours(0, 0, 0, 0) &&
      //   feedbackDate > eightDaysStart
      // ) {
      //   if (feedbackDate > oneDayStart) {
      //     values[6]++; //For the whole of 1 day ago
      //   } else if (feedbackDate > twoDaysStart) {
      //     values[5]++; //For the whole of 2 days ago
      //   } else if (feedbackDate > threeDaysStart) {
      //     values[4]++; //For the whole of 3 days ago
      //   } else if (feedbackDate > fourDaysStart) {
      //     values[3]++; //For the whole of 4 days ago
      //   } else if (feedbackDate > fiveDaysStart) {
      //     values[2]++; //For the whole of 5 days ago
      //   } else if (feedbackDate > sixDaysStart) {
      //     values[1]++; //For the whole of 6 days ago
      //   } else if (feedbackDate > sevenDaysStart) {
      //     values[0]++; //For the whole of 7 days ago
      //   }
      // }
      ////////////////////////////////////////////////////////////////////////////////////////////////
      // let mmyy = moment(Date.now()).format('MM/YY');
      let mmyy = moment(timestamp[i]).format('MM/YY');
      if (mmyy === labels[11]) {
        values[11]++; //For the whole of 1 month ago
      } else if (mmyy === labels[10]) {
        values[10]++; //For the whole of 2 months ago
      } else if (mmyy === labels[9]) {
        values[9]++; //For the whole of 3 months ago
      } else if (mmyy === labels[8]) {
        values[8]++; //For the whole of 4 months ago
      } else if (mmyy === labels[7]) {
        values[7]++; //For the whole of 5 months ago
      } else if (mmyy === labels[6]) {
        values[6]++; //For the whole of 6 months ago
      } else if (mmyy === labels[5]) {
        values[5]++; //For the whole of 7 months ago
      } else if (mmyy === labels[4]) {
        values[4]++; //For the whole of 8 months ago
      } else if (mmyy === labels[3]) {
        values[3]++; //For the whole of 9 months ago
      } else if (mmyy === labels[2]) {
        values[2]++; //For the whole of 10 months ago
      } else if (mmyy === labels[1]) {
        values[1]++; //For the whole of 11 months ago
      } else if (mmyy === labels[0]) {
        values[0]++; //For the whole of 12 months ago
      }
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////

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
