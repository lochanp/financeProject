import { useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid,
  Paper
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCategory, addExpense } from '../store/actions/action';

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    expenseAmt: '',
    category: ''
  });
  const [categories, setCategories] = useState(['Groceries', 'Shopping']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [addNewExpCategory, setAddNewExpCategory] = useState('');

  const handleAddExpenseCategory = e => {
    e.preventDefault();
    setCategories([...categories, addNewExpCategory]);
    dispatch(addCategory(addNewExpCategory));
    setAddNewExpCategory('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addExpense(formData.expenseAmt, selectedCategory));
    setFormData({
      expenseAmt: '',
      category: ''
    });
    setSelectedCategory('');
  };

  return (
    <Container maxWidth='sm' sx={{ mt: 5 }}>
      <Typography variant='h4' align='center' gutterBottom>
        Add an Expense
      </Typography>
      <Paper variant='outlined' sx={{ p: 3, mb: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='expenseAmt'
                label='Expense Amount'
                variant='outlined'
                required
                value={formData.expenseAmt}
                onChange={handleChange}
                name='expenseAmt'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='expenseCategoryLabel'>Expense Category</InputLabel>
                <Select
                  labelId='expenseCategoryLabel'
                  id='expenseCategory'
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  label='Expense Category'
                >
                  {categories.map((category, i) => (
                    <MenuItem key={i} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth>
                Add Expense
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Paper variant='outlined' sx={{ p: 3 }}>
        <form onSubmit={handleAddExpenseCategory}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='newCategory'
                label='Add Expense Category'
                variant='outlined'
                value={addNewExpCategory}
                onChange={e => setAddNewExpCategory(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' fullWidth>
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ExpenseForm;
