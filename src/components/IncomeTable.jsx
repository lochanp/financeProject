import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';

const IncomeTable = () => {
  const incomeData = useSelector(state => state.incomes);
  return (
    <TableContainer component={Paper}>
      {incomeData.length > 0 && (
        <Table aria-label='income table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                  Categories
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                  Income
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomeData.map((row, i) => (
              <TableRow key={i} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                <TableCell>
                  <Typography variant='body1'>{row.category}</Typography>
                </TableCell>
                <TableCell align='right' sx={{ display: 'flex', gap: '10px' }}>
                  <Chip label={'Delete Transaction'} color={'error'} sx={{ fontSize: '11px', cursor: 'pointer' }} />
                  <Chip label={`INR ${row.income} +`} color={'success'} sx={{ fontSize: '16px' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default IncomeTable;
