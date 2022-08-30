import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ConfirmationPopup from './Confirmation';

const scheduleButton = () => {
  return (
    <strong>
      <ConfirmationPopup />
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
    width: 180,
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
      <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]} />
    </div>
  );
}
