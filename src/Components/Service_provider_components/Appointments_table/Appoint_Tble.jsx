import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Appoint_Tble.css'; 

const StyledTableCell = styled(TableCell)`
  font-family: 'Inter';
`;

const TransparentTableRow = styled(TableRow)`
  background-color: transparent !important;
`;

const TableContainerStyled = styled(TableContainer)`
  background-color: transparent !important;
`;

function createData(ApptID, Customer_Name, Date, Time, Comm_method) {
  return { ApptID, Customer_Name, Date, Time, Comm_method };
}

const rows = [
  createData('AP001', 'Nimal', '6.0', 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Appoint_Tble() {
  return (
    <TableContainerStyled component={Paper}>
      <Table sx={{ margin: '0%', width: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="table-cell table-header">Appt.ID</StyledTableCell>
            <StyledTableCell className="table-cell table-header" align="left">Customer Name</StyledTableCell>
            <StyledTableCell className="table-cell table-header" align="left">Date</StyledTableCell>
            <StyledTableCell className="table-cell table-header" align="left">Time</StyledTableCell>
            <StyledTableCell className="table-cell table-header" align="left">Comm. method</StyledTableCell>
            <StyledTableCell className="table-cell table-header" align="lefts">Description</StyledTableCell>
            <StyledTableCell className="table-cell table-header" align="lefts"> </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TransparentTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row" className="table-cell">{row.name}</StyledTableCell>
              <StyledTableCell align="left" className="table-cell">{row.calories}</StyledTableCell>
              <StyledTableCell align="left" className="table-cell">{row.fat}</StyledTableCell>
              <StyledTableCell align="left" className="table-cell">{row.carbs}</StyledTableCell>
              <StyledTableCell align="left" className="table-cell">{row.protein}</StyledTableCell>
              <StyledTableCell align="left" className="table-cell">{row.protein}</StyledTableCell>
            </TransparentTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainerStyled>
  );
}
