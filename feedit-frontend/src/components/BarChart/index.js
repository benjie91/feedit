import React, { Component } from 'react';
// import * as d3 from 'd3';
import { scaleBand, scaleLinear } from 'd3-scale';
import Axes from './Axes';
import Bars from './Bars';

export default class BarChart extends Component {
  constructor() {
    super();
    this.xScale = scaleBand();
    this.yScale = scaleLinear();
  }

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 };
    const svgDimensions = { width: 600, height: 500 };

    var fData = Array.from(this.props.feedbackData);
    var sysID = fData
      .map(feedbackData => feedbackData.sid)
      .filter((value, index, self) => self.indexOf(value) === index);

    var count = fData.reduce(
      (acc, o) => ((acc[o.sid] = (acc[o.sid] || 0) + 1), acc),
      {},
    );

    count = Object.values(count);

    let data = [];
    for (var i = 0; i < sysID.length; i++) {
      data.push({
        sysID: sysID[i],
        count: count[i],
      });
    }

    const maxValue = Math.max(...data.map(d => d.count));

    // scaleBand type
    const xScale = this.xScale
      .padding(0.5)
      // scaleBand domain should be an array of specific values
      // in our case, we want to use movie titles
      .domain(data.map(d => d.sysID))
      .range([margins.left, svgDimensions.width - margins.right]);

    // scaleLinear type
    const yScale = this.yScale
      // scaleLinear domain required at least two values, min and max
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    return (
      <svg width={svgDimensions.width} height={svgDimensions.height}>
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
        />
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={data}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
        />
      </svg>
    );
  }
}

//   componentDidMount() {
//     const data = [2, 4, 2, 6, 8];
//     this.drawBarChart(data);
//   }
//
//   drawBarChart(data) {
//     const canvasHeight = 400;
//     const canvasWidth = 600;
//     const scale = 20;
//     const svgCanvas = d3
//       .select(this.refs.canvas)
//       .append('svg')
//       .attr('width', canvasWidth)
//       .attr('height', canvasHeight)
//       .style('border', '1px solid black');
//
//     svgCanvas
//       .selectAll('rect')
//       .data(data)
//       .enter()
//       .append('rect')
//       .attr('width', 40)
//       .attr('height', datapoint => datapoint * scale)
//       .attr('fill', 'orange')
//       .attr('x', (datapoint, iteration) => iteration * 45)
//       .attr('y', datapoint => canvasHeight - datapoint * scale);
//
//     // svgCanvas
//     //   .selectAll('text')
//     //   .data(data)
//     //   .enter()
//     //   .append('text')
//     //   .attr('x', (dataPoint, i) => i * 45 + 10)
//     //   .attr('y', (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
//     //   .text(dataPoint => dataPoint);
//   }
//
//   render() {
//     return <div ref="canvas"></div>;
//   }
// }
//
// export default BarChart;
