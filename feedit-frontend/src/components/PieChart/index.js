import React, { Component } from 'react';
import { Pie as PieChart } from 'react-chartjs-2';
import { feedbackData } from '../../data/MockFeedbackData';

export default class Pie extends Component {
  render() {
    // let sysID = this.props.feedbackData.filter(
    //   feedbackData => feedbackData.timestamp.slice(0, 10) === '08/06/2019',
    // );
    let wholeResult = this.props.feedbackData
      .map(feedbackData => feedbackData.timestamp.substr(11).replace(':', ''))
      .map(Number);
    // let wholeResult = sysID
    //   .map(feedbackData => feedbackData.timestamp.substr(11).replace(':', ''))
    //   .map(Number);

    // let testing = this.props.ts;
    let count = [0, 0, 0, 0];

    for (let i = 0; i < wholeResult.length; i++) {
      if (wholeResult[i] < 600) {
        count[3]++;
      } else if (wholeResult[i] < 1200) {
        count[2]++;
      } else if (wholeResult[i] < 1800) {
        count[1]++;
      } else {
        count[0]++;
      }
    }

    var data = {
      labels: ['0 - 6 hours', '6 - 12 hours', '12 - 18 hours', '18 - 24 hours'],
      // labels: sysID,
      datasets: [
        {
          data: count,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    return (
      <div>
        <h3>Past Day</h3>
        <PieChart data={data} />
        {/*<h1>testing</h1>*/}
      </div>
    );
  }
}
