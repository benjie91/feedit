// import React, { Component } from 'react';
// import { Pie as PieChart } from 'react-chartjs-2';
// import moment from 'moment';
// import { feedbackData } from '../../data/MockFeedbackData';
//
// export default class Pie extends Component {
//   render() {
//     let timestamp = this.props.feedbackData.map(feedbackData =>
//       feedbackData.timestamp.toString(),
//     );
//
//     let now = Date.now();
//     let yesterday = Date.now() - 60 * 60 * 24 * 1000;
//     let sixteenHours = Date.now() - 60 * 60 * 16 * 1000;
//     let twelveHours = Date.now() - 60 * 60 * 12 * 1000;
//     let sixHours = Date.now() - 60 * 60 * 6 * 1000;
//
//     let count = [0, 0, 0, 0]; //First is 18-24, ..., Last is 0-6
//
//     for (let i = 0; i < this.props.feedbackData.length; i++) {
//       let feedbackDate = Date.parse(timestamp[i]);
//       if (feedbackDate > sixHours && feedbackDate <= now) {
//         count[3]++;
//       } else if (feedbackDate > twelveHours && feedbackDate <= now) {
//         count[2]++;
//       } else if (feedbackDate > sixteenHours && feedbackDate <= now) {
//         count[1]++;
//       } else if (feedbackDate > yesterday && feedbackDate <= now) {
//         count[0]++;
//       }
//     }
//
//     var data = {
//       labels: ['0 - 6 hours', '6 - 12 hours', '12 - 18 hours', '18 - 24 hours'],
//       // labels: sysID,
//       datasets: [
//         {
//           data: count,
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//           hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         },
//       ],
//     };
//     return (
//       <div>
//         <h3>Past Day</h3>
//         <PieChart data={data} />
//       </div>
//     );
//   }
// }
