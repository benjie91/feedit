import React from 'react';
import { AgGridReact } from 'ag-grid-react';

const FeedbackDataGrid = props => {
  const columnDefs = [
    {
      headerName: 'System ID',
      field: 'sid',
      width: 110,
    },
    {
      headerName: 'Feedback Target',
      field: 'fbt',
      width: 150,
    },
    {
      headerName: 'User ID',
      field: 'uid',
      width: 90,
    },
    {
      headerName: 'User Group',
      field: 'ug',
      width: 120,
    },
    {
      headerName: 'Time Stamp',
      field: 'ts',
      width: 150,
    },
    {
      headerName: 'Feedback',
      field: 'fb',
      width: 300,
    },
  ];

  const defaultColDef = {
    suppressSizeToFit: true,
    resizable: true,
    sortable: true,
    filter: true,
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
        columnDefs={columnDefs}
        rowData={props.feedbackData}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};

export default FeedbackDataGrid;
