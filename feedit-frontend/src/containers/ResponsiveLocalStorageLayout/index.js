import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';

import Bar from '../../components/BarChart';
import Line from '../../components/LineChart';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';
import { Button } from 'react-bootstrap';
import Spacer from 'react-spacer';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layouts: getFromLS('layouts') || {},
    };
  }

  resetLayout = () => {
    this.setState({ layouts: {} });
  };

  onLayoutChange = (layout, layouts) => {
    saveToLS('layouts', layouts);
    this.setState({ layouts });
  };

  render() {
    return (
      <div>
        <div style={{ display: 'flex' }}>
          <Spacer grow="1" />
          <Button
            onClick={() => this.resetLayout()}
            style={{ marginTop: '20px' }}
          >
            Reset Layout
          </Button>
        </div>
        <ResponsiveReactGridLayout
          className="layout"
          breakpoints={{ lg: 1200, md: 796, sm: 768 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          // rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
          isResizable={this.props.dynamic}
          isDraggable={this.props.dynamic}
        >
          <div
            key="feedit-barchart"
            data-grid={{ w: 6, h: 3, x: 0, y: 0, isResizable: false }}
            style={{ padding: '20px' }}
          >
            <Bar
              systemData={this.props.systemData}
              feedbackData={this.props.feedbackData}
              systemId={this.props.systemId}
              pastDateRange={this.props.pastDateRange}
            />
          </div>
          <div
            key="feedit-linechart"
            data-grid={{ w: 6, h: 3, x: 6, y: 0, isResizable: false }}
            style={{ padding: '20px' }}
          >
            <Line
              systemData={this.props.systemData}
              feedbackData={this.props.feedbackData}
              systemId={this.props.systemId}
              pastDateRange={this.props.pastDateRange}
            />
          </div>
          <div
            key="3"
            data-grid={{ w: 12, h: 4, x: 0, y: 3 }}
            style={{ padding: '20px' }}
          >
            <FeedbackDataGrid
              systemData={this.props.systemData}
              feedbackData={this.props.feedbackData}
              systemId={this.props.systemId}
              pastDateRange={this.props.pastDateRange}
            />
          </div>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem('rgl-8')) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      'rgl-8',
      JSON.stringify({
        [key]: value,
      }),
    );
  }
}
