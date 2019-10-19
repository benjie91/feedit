import React from 'react';
import { AgGridReact } from 'ag-grid-react';

const SystemsDataGrid = ({ systemsData }) => {
  const columnDefs = [
    {
      headerName: 'System ID',
      field: 'systemId',
    },
    {
      headerName: 'System Name',
      field: 'systemName',
    },
    {
      headerName: 'Custodian Name',
      field: 'custodianName',
    },
    {
      headerName: 'Registered Date',
      field: 'registeredDateTime',
    },
  ];

  const defaultColDef = {
    suppressSizeToFit: true,
    resizable: true,
    sortable: true,
    filter: true,
  };

  const onGridReady = params => {
    // this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;
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
        rowData={systemsData}
        defaultColDef={defaultColDef}
        onGridReady={onGridReady}
      />
    </div>
  );
};

export default SystemsDataGrid;
