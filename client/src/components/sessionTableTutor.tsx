import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    // width: 70,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'studentName',
    headerName: 'Student Name',
    // width: 130,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'subject',
    headerName: 'Subject',
    // width: 130,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'date',
    headerName: 'Date',
    // width: 160,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'time',
    headerName: 'Time',
    // width: 90,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    studentName: 'Rachelle',
    subject: 'Trigonometry',
    date: 'September 12, 2022',
    time: '1:00 pm',
  },
  { id: 2, studentName: 'Gwen', subject: 'Anatomy', date: 'October 1, 2022', time: '3:00 pm' },
  { id: 3, studentName: 'Josh', subject: 'Chemistry', date: 'October 15, 2022', time: '2:00 pm' },
  {
    id: 4,
    studentName: 'Stephan',
    subject: 'US History',
    date: 'September 23, 2022',
    time: '10:00 am',
  },
];

interface SessionTableTutorProps {
  title: string;
}

export default function DataTable(props: SessionTableTutorProps) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        sx={{
          boxShadow: 2,
          color: 'black',
          // border: 4,
          // borderColor: '#2e75b5',
          '& .MuiDataGrid-cell:hover': {
            color: '#00b0f0',
          },
          '& .super-app-theme--header': {
            backgroundColor: '#2e75b5',
            color: 'white',
          },
        }}
      />
    </div>
  );
}
