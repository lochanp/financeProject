import { useEffect, useState } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const TotalBalance = () => {
  const [totalBalance, setTotalBalance] = useState(0);
  const incomeData = useSelector(state => state.incomes);
  const expenseData = useSelector(state => state.expenses);

  useEffect(() => {
    const totalIncome = incomeData.reduce((acc, item) => acc + parseFloat(item.income), 0);
    const totalExpenses = expenseData.reduce((acc, item) => acc + parseFloat(item.expense), 0);
    setTotalBalance(totalExpenses > 0 ? totalIncome - totalExpenses : totalIncome);
  }, [incomeData, expenseData]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography variant='h6' component='div' sx={{ mr: 2 }}>
        Total Balance:
      </Typography>
      <Chip sx={{ fontSize: '20px' }} label={totalBalance} color={totalBalance > 0 ? 'primary' : 'secondary'} />
    </Box>
  );
};

export default TotalBalance;
