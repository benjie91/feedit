import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
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
      ],
      defaultColDef: {
        suppressSizeToFit: true,
        resizable: true,
        sortable: true,
        filter: true,
      },

      rowData: [
        {
          sid: 'App01',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 12345,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App01',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 23456,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App01',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App02',
          fb: 'Good Job!',
          fbt: 'Generic',
          uid: 45678,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App02',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 56789,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App02',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 12345,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App03',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 23456,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App03',
          fb: 'Good job!',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App03',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 45678,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App04',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 56789,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App04',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 12345,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App04',
          fb: 'Good job!',
          fbt: 'Generic',
          uid: 23456,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App05',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App05',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 45678,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App05',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 56789,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App06',
          fb: 'Good job!',
          fbt: 'Generic',
          uid: 12345,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App06',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 23456,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App06',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App07',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 45678,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App07',
          fb: 'Good job!',
          fbt: 'Generic',
          uid: 56789,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App07',
          fb: 'The system is not easy to use.',
          fbt: 'Generic',
          uid: 12345,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App08',
          fb: 'The GUI is poor.',
          fbt: 'Generic',
          uid: 23456,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App08',
          fb: 'The system is very slow.',
          fbt: 'Generic',
          uid: 34567,
          ug: 'Department A',
          ts: '08/09/2019 15:22',
        },
        {
          sid: 'App08',
          fb: 'Good job!',
          fbt: 'Generic',
          uid: 45678,
          ug: 'Department B',
          ts: '08/09/2019 15:22',
        },
      ],
    };
  }

  render() {
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ overflow: 'hidden', flexGrow: '1' }}>
            <div
              style={{
                height: '100%',
                width: '100%',
              }}
              // className="ag-theme-balham"
            >
              <AgGridReact
                columnDefs={this.state.columnDefs}
                rowData={this.state.rowData}
                defaultColDef={this.state.defaultColDef}
              />
            </div>
          </div>
          &nbsp;
          <div style={{ backgroundColor: '#ccc', padding: '20rem' }}>
            right side column
          </div>
          <br />
        </div>
      </div>
    );
  }
}

export default DashboardPage;
