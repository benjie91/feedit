import React, { Component } from 'react';
import { Bar as BarChart } from 'react-chartjs-2';
import moment from 'moment';
import { feedbackData } from '../../data/MockFeedbackData';

export default class Bar extends Component {
  render() {
    // //Produce an array of the distinct system IDs
    // const sysID = this.props.feedbackData
    //   .map(feedbackData => feedbackData.sid)
    //   .filter((value, index, self) => self.indexOf(value) === index);
    //
    // //Produce an array of the count for each system ID
    // let count = this.props.feedbackData.reduce(
    //   (acc, o) => ((acc[o.sid] = (acc[o.sid] || 0) + 1), acc),
    //   {},
    // );
    //
    // count = Object.values(count);

    let timestamp = this.props.feedbackData.map(feedbackData =>
      feedbackData.timestamp.toString(),
    );

    let now = Date.now();
    let yesterday = Date.now() - 60 * 60 * 24 * 1000;
    let sixteenHours = Date.now() - 60 * 60 * 16 * 1000;
    let twelveHours = Date.now() - 60 * 60 * 12 * 1000;
    let sixHours = Date.now() - 60 * 60 * 6 * 1000;

    let count = [0, 0, 0, 0]; //First is 18-24, ..., Last is 0-6

    for (let i = 0; i < this.props.feedbackData.length; i++) {
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

    /////////////////////////////////////////////////////////////////////////////////
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
        <h3>Past Day</h3>
        <BarChart
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
  }
}
