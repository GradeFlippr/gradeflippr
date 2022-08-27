import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import App from '../App';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'tutorName', headerName: 'Tutor Name', width: 130 },
  { field: 'subject', headerName: 'Subject', width: 130 },
  {
    field: 'date',
    headerName: 'Date',
    align: 'left',
    width: 160,
  },
  {
    field: 'time',
    headerName: 'Time',

    width: 90,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.studentName || ''} ${params.row.subject || ''} ${params.row.date || ''} ${params.row.time || ''}`,
  },
];

const rows = [
  {
    id: 1,
    tutorName: 'Rachelle',
    subject: 'Trigonometry',
    date: 'September 12, 2022',
    time: '1:00 pm',
  },
  { id: 2, tutorName: 'Gwen', subject: 'Anatomy', date: 'October 1, 2022', time: '3:00 pm' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
}
