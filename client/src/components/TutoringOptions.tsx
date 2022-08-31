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
  {
    field: 'id',
    headerName: 'ID',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
  },
  {
    field: 'tutorName',
    headerName: 'Tutor Name',
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'subject',
    headerName: 'Subject',
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'date',
    headerName: 'Date',
    align: 'center',
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
  },
  {
    field: 'time',
    headerName: 'Time',
    flex: 1,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.studentName || ''} ${params.row.subject || ''} ${params.row.date || ''} ${params.row.time || ''}`,
  },
  {
    field: 'select',
    headerName: 'Schedule',
    flex: 1,
    align: 'center',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
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
