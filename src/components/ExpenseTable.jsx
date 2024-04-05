import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import { removeExpense } from '../store/actions/action';
// import { removeExpense } from '../store/actions/action';

const ExpenseTable = () => {
  const dispatch = useDispatch();
  const expenseData = useSelector(state => state.expenses);

  return (
    <TableContainer component={Paper}>
      {expenseData.length > 0 && (
        <Table aria-label='expense table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                  Categories
                </Typography>
              </TableCell>
              <TableCell align='right'>
                <Typography variant='h6' sx={{ fontWeight: 600 }}>
                  Expense
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenseData.map((row, i) => (
              <TableRow key={i} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                <TableCell>
                  <Typography variant='body1'>{row.category}</Typography>
                </TableCell>
                <TableCell align='right' sx={{ display: 'flex', gap: '10px' }}>
                  <Chip
                    onClick={() => dispatch(removeExpense(row.expense))}
                    label={'Delete Transaction'}
                    color={'error'}
                    sx={{ fontSize: '11px', cursor: 'pointer' }}
                  />
                  <Chip label={`INR ${row.expense} +`} color={'error'} sx={{ fontSize: '16px' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};

export default ExpenseTable;
