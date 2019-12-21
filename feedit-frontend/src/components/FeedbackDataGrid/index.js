import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

const FeedbackDataGrid = ({ feedbackData, systemId }) => {
  const gridApi = useRef(null);
  const gridColumnApi = useRef(null);

  const onGridReady = params => {
    gridApi.current = params.api;
    gridColumnApi.current = params.columnApi;

    gridApi.current.sizeColumnsToFit();
  };

  const filteredfeedbackData =
    systemId !== 'All'
      ? feedbackData.filter(data => {
          return data.systemId === systemId;
        })
      : feedbackData;

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
            headerName: 'Feedback Type',
            field: 'feedbackType',
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
            headerName: 'Feedback Question',
            field: 'feedbackQuestion',
          },
          {
            headerName: 'Feedback Answer',
            field: 'feedbackAnswer',
          },
        ]}
        rowData={filteredfeedbackData}
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
