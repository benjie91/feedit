import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import moment from 'moment';

const FeedbackDataGrid = ({ feedbackData, systemId, pastDateRange }) => {
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

  if (pastDateRange !== '') {
    filteredFeedbackData = filteredFeedbackData.filter(data =>
      moment(data.timestamp).isAfter(moment().subtract(pastDateRange, 'days')),
    );
  }

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: '550px', // Will try to make it to 100% instead
        width: '100%',
      }}
    >
      <AgGridReact
        columnDefs={[
          {
            headerName: 'System ID',
            field: 'systemId',
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
