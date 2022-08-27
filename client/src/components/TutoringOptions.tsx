import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'TutorName' | 'Subject' | 'Date' | 'Time' | 'SignUp';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'TutorName', label: 'Tutor Name', minWidth: 170 },
  { id: 'Subject', label: 'Subject', minWidth: 100 },
  {
    id: 'Date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    // format: (value: string) =>
    //   value.toLocaleString('en-US', {
    //     weekday: 'long',
    //     year: 'numeric',
    //     month: 'short',
    //     day: 'numeric',
    //   }),
  },
  {
    id: 'Time',
    label: 'Time',
    minWidth: 170,
    align: 'right',
    // format: (value: string) =>
    //   value.toLocaleString('en-US', {
    //     hour: '2-digit',
    //     minute: '2-digit',
    //   }),
  },
  {
    id: 'SignUp',
    label: 'SignUp',
    minWidth: 170,
    align: 'right',
  },
];

interface Data {
  TutorName: string;
  Subject: string;
  Date: string;
  Time: string;
  SignUp: string;
}

function createData(
  TutorName: string,
  Subject: string,
  Date: string,
  Time: string,
  SignUp: string
): Data {
  return { TutorName, Subject, Date, Time, SignUp };
}

const rows = [
  createData('Alex Smith', 'Algebra 1', '9/1/22', '1:00pm', 'signuphere'),
  createData('Lorraine Gutierrez', 'Algebra 1', '9/2/22', '2:00pm', 'signuphere'),
  createData('Aaliyah Jones', 'Algebra 1', '9/1/22', '1:00pm', 'signuphere'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.Subject}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
