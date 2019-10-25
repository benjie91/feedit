import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export default class pie extends Component {
  render() {
    // var sysID = Array.from(this.props.sysID);
    // var count = Array.from(this.props.count);

    var data = {
      labels: ['0 - 6 hours', '6 - 12 hours', '12 - 18 hours', '18 - 24 hours'],
      // labels: sysID,
      datasets: [
        {
          data: [300, 50, 100, 200],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };
    return (
      <div>
        <h3>Feedback received (Past 24 hours)</h3>
        <Pie data={data} />
      </div>
    );
  }
}
