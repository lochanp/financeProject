import { Provider } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import IncomeForm from '../components/IncomeForm';
import store from '../store/store';
import IncomeTable from '../components/IncomeTable';
import ExpenseTable from '../components/ExpenseTable';
import { Container, Grid } from '@mui/material';
import Header from '../components/Header';
import TotalBalance from '../components/TotalBalance';

// eslint-disable-next-line react/prop-types
const Dashboard = ({ onLogout }) => {
  return (
    <div>
      <Provider store={store}>
        <Header onLogout={onLogout} />

        <Container fullWidth sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <TotalBalance />
        </Container>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <IncomeForm />
          </Grid>
          <Grid item xs={6}>
            <ExpenseForm />
          </Grid>
          <Grid item xs={6}>
            <IncomeTable />
          </Grid>
          <Grid item xs={6}>
            <ExpenseTable />
          </Grid>
        </Grid>
      </Provider>
    </div>
  );
};

export default Dashboard;
