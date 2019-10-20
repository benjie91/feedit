import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

const SystemsDataGrid = ({ systemsData }) => {
  const gridApi = useRef();
  const gridColumnApi = useRef();

  const onGridReady = params => {
    gridApi.current = params.api;
    gridColumnApi.current = params.columnApi;

    gridApi.current.sizeColumnsToFit();
  };

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: '300px',
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
        ]}
        rowData={systemsData}
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

export default SystemsDataGrid;
