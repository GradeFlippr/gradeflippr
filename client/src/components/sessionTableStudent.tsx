import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import App from '../App';
import Button from '@mui/material/Button';

const cancelButton = () => {
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
        Cancel
      </Button>
    </strong>
  );
};

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

    width: 120,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.studentName || ''} ${params.row.subject || ''} ${params.row.date || ''} ${params.row.time || ''}`,
  },
  { field: 'edit', headerName: 'Actions', width: 130, align: 'left', renderCell: cancelButton },
  // { field: 'cancel', headerName: 'Actions', width: 130, align: 'left', renderCell: cancelButton },
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

interface SessionTableStudentProps {
  title: string;
}

export default function DataTable(props: SessionTableStudentProps) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} />
    </div>
  );
}
