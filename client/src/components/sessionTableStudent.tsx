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
        sx={{ bgcolor: '#3F48CC' }}
      >
        Cancel
      </Button>
    </strong>
  );
};

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
    field: 'tutorName',
    headerName: 'Tutor Name',
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
    // width: 120,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.row.studentName || ''} ${params.row.subject || ''} ${params.row.date || ''} ${params.row.time || ''}`,
  },
  {
    field: 'edit',
    headerName: 'Actions',
    // width: 130,
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    renderCell: cancelButton,
  },
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
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
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
