import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

const FeedbackDataGrid = ({ feedbackData }) => {
  const gridApi = useRef(null);
  const gridColumnApi = useRef(null);

  const onGridReady = params => {
    gridApi.current = params.api;
    gridColumnApi.current = params.columnApi;

    gridApi.current.sizeColumnsToFit();
  };

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: '500px',
        width: '100%',
      }}
    >
      <AgGridReact
        columnDefs={[
          {
            headerName: 'System ID',
            field: 'sid',
          },
          {
            headerName: 'Feedback Target',
            field: 'fbt',
          },
          {
            headerName: 'User ID',
            field: 'uid',
          },
          {
            headerName: 'User Group',
            field: 'ug',
          },
          {
            headerName: 'Time Stamp',
            field: 'ts',
          },
          {
            headerName: 'Feedback',
            field: 'fb',
          },
        ]}
        rowData={feedbackData}
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
