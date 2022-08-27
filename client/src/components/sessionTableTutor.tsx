import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'studentName', headerName: 'Student Name', width: 130 },
  { field: 'subject', headerName: 'Subject', width: 130 },
  {
    field: 'date',
    headerName: 'Date',
    width: 160,
    align: 'left',
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 90,
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

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
}
