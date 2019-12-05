import React, { Component } from 'react';
import { Pie as PieChart } from 'react-chartjs-2';
import moment from 'moment';
import { feedbackData } from '../../data/MockFeedbackData';

export default class Pie extends Component {
  render() {
    /*  This is meant to just check if the timestamp value is on a certain date,
        will change this to checking if its past 24 hours*/
    // let sysID = this.props.feedbackData.filter(
    //   feedbackData => feedbackData.timestamp.slice(0, 10) === '08/06/2019',
    // );

    let wholeResult = this.props.feedbackData
      .map(feedbackData => {
        var feedbackDate = Date.parse(feedbackData.timestamp);
        const now = Date.now();
        const yesterday = Date.now() - 60 * 60 * 24 * 1000;
        // const range = moment().range(now, yesterday);
        // const isin = range.contains(feedbackDate);
        // console.log(isin);
        console.log(feedbackDate);
        if (feedbackDate < yesterday && feedbackDate <= now) {
          console.log(feedbackData);
          return feedbackData;
        } else {
          return null;
        }
      })
      .map(Number);
    /* The code at the next 5 lines can be deleted*/
    // let wholeResult = sysID
    //   .map(feedbackData => feedbackData.timestamp.substr(11).replace(':', ''))
    //   .map(Number);
    //
    // let testing = this.props.ts;

    let count = [0, 0, 0, 0]; //First is 18-24, ..., Last is 0-6

    for (let i = 0; i < wholeResult.length; i++) {
      if (wholeResult[i] < 600) {
        count[3]++;
      } else if (wholeResult[i] < 1200) {
        count[2]++;
      } else if (wholeResult[i] < 1800) {
        count[1]++;
      } else if (wholeResult[i] < 2359) {
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
