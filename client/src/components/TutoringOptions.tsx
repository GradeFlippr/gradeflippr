import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import App from '../App';
import Button from '@mui/material/Button';

const scheduleButton = () => {
  return (
    <strong>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
        // onClick={() => {
        // }}
      >
        Schedule
      </Button>
    </strong>
  );
};

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'tutorName', headerName: 'Tutor Name', width: 200 },
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

    width: 120,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.studentName || ''} ${params.row.subject || ''} ${params.row.date || ''} ${params.row.time || ''}`,
  },
  {
    field: 'select',
    headerName: 'Schedule',
    width: 130,
    align: 'left',
    renderCell: scheduleButton,
  },
];

const rows = [
  {
    id: 1,
    tutorName: 'Alex Smith',
    subject: 'Algebra I',
    date: 'September 12, 2022',
    time: '1:00 pm',
  },
  {
    id: 2,
    tutorName: 'Lorraine Gutierrez',
    subject: 'Algebra I',
    date: 'October 1, 2022',
    time: '3:00 pm',
  },
  {
    id: 3,
    tutorName: 'Aaliyah Jones',
    subject: 'Algebra I',
    date: 'October 1, 2022',
    time: '3:00 pm',
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
}

//   {
//     id: 'Date',
//     label: 'Date',
//     minWidth: 170,
//     align: 'right',
//     // format: (value: string) =>
//     //   value.toLocaleString('en-US', {
//     //     weekday: 'long',
//     //     year: 'numeric',
//     //     month: 'short',
//     //     day: 'numeric',
//     //   }),
//   },
//   {
//     id: 'Time',
//     label: 'Time',
//     minWidth: 170,
//     align: 'right',
//     // format: (value: string) =>
//     //   value.toLocaleString('en-US', {
//     //     hour: '2-digit',
//     //     minute: '2-digit',
//     //   }),
//   },
