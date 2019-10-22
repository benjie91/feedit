import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';

export default class Bars extends Component {
  constructor(props) {
    super(props);

    this.colorScale = scaleLinear()
      .domain([0, this.props.maxValue])
      .range(['#F3E5F5', '#324CA8'])
      .interpolate(interpolateLab);
  }

  render() {
    const { scales, margins, data, svgDimensions } = this.props;
    const { xScale, yScale } = scales;
    const { height } = svgDimensions;

    const bars = data.map(datum => (
      <rect
        key={datum.sysID}
        x={xScale(datum.sysID)}
        y={yScale(datum.count)}
        height={height - margins.bottom - scales.yScale(datum.count)}
        width={xScale.bandwidth()}
        fill={this.colorScale(datum.count)}
      />
    ));

    return <g>{bars}</g>;
  }
}
