import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';

import Bar from '../../components/BarChart';
import Line from '../../components/LineChart';
import FeedbackDataGrid from '../../components/FeedbackDataGrid';
import { Button } from 'react-bootstrap';
import Spacer from 'react-spacer';
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS('layouts') || {};

/**
 * This layout demonstrates how to sync multiple responsive layouts to localstorage.
 */
export default class ResponsiveLocalStorageLayout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
    };
  }

  static get defaultProps() {
    return {
      className: 'layout',
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      // rowHeight: 30,
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveToLS('layouts', layouts);
    this.setState({ layouts });
  }

  render() {
    let systemData = this.props.systemData;
    let feedbackData = this.props.feedbackData;
    let systemId = this.props.systemId;
    let pastDateRange = this.props.pastDateRange;
    let dynamic = this.props.dynamic;

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
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          // rowHeight={30}
          layouts={this.state.layouts}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
          isResizable={dynamic % 2}
          isDraggable={dynamic % 2}
        >
          <div
            key="1"
            data-grid={{ w: 5, h: 3, x: 0, y: 0 }}
            style={{ padding: '20px' }}
          >
            <Bar
              systemData={systemData}
              feedbackData={feedbackData}
              systemId={systemId}
              pastDateRange={pastDateRange}
            />
          </div>
          <div
            key="2"
            data-grid={{ w: 5, h: 3, x: 6, y: 0 }}
            style={{ padding: '20px' }}
          >
            <Line
              systemData={systemData}
              feedbackData={feedbackData}
              systemId={systemId}
              pastDateRange={pastDateRange}
            />
          </div>
          <div
            key="3"
            data-grid={{ w: 12, h: 4, x: 0, y: 3 }}
            style={{ padding: '20px' }}
          >
            <FeedbackDataGrid
              systemData={systemData}
              feedbackData={feedbackData}
              systemId={systemId}
              pastDateRange={pastDateRange}
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
