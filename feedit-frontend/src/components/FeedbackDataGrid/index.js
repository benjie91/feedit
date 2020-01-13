import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import moment from 'moment';

const FeedbackDataGrid = ({
  systemData,
  feedbackData,
  systemId,
  pastDateRange,
}) => {
  const gridApi = useRef(null);
  const gridColumnApi = useRef(null);

  const onGridReady = params => {
    gridApi.current = params.api;
    gridColumnApi.current = params.columnApi;

    gridApi.current.sizeColumnsToFit();
  };

  let filteredFeedbackData = feedbackData;
  if (systemId !== 'All') {
    filteredFeedbackData = filteredFeedbackData.filter(
      data => data.systemId === systemId,
    );
  }

  let days = 0;
  if (pastDateRange === 'Week') days = 7;
  else if (pastDateRange === 'Year') days = 365;

  if (pastDateRange !== '') {
    filteredFeedbackData = filteredFeedbackData.filter(data =>
      moment(data.timestamp).isAfter(moment().subtract(days, 'days')),
    );
  }

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: '100%', // Will try to make it to 100% instead
        width: '100%',
      }}
    >
      <AgGridReact
        columnDefs={[
          {
            headerName: 'Unread',
            field: 'unread',
          },
          {
            headerName: 'System ID',
            field: 'systemId',
          },
          {
            headerName: 'System Name',
            cellRenderer: props => {
              return systemData.find(
                data => data.systemId === props.data.systemId,
              ).systemName;
            },
          },
          {
            headerName: 'User ID',
            field: 'userId',
          },
          {
            headerName: 'User Group',
            field: 'userGroup',
          },
          {
            headerName: 'Time Stamp',
            field: 'timestamp',
          },
          {
            headerName: 'Feedback Type',
            field: 'feedbackType',
            width: 80,
          },
          {
            headerName: 'Feedback Question',
            field: 'feedbackQuestion',
          },
          {
            headerName: 'Feedback Answer',
            field: 'feedbackAnswer',
          },
        ]}
        rowData={filteredFeedbackData}
        defaultColDef={{
          resizable: true,
          sortable: true,
          filter: true,
        }}
        onGridReady={onGridReady}
      />
    </div>
  );
};

export default FeedbackDataGrid;
