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
import { addCategory, addIncome } from '../store/actions/action';

const IncomeForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    incomeAmt: '',
    category: ''
  });
  const [categories, setCategories] = useState(['Salary']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [addNewIncCategory, setAddNewIncCategory] = useState('');

  const handleAddIncomeCategory = e => {
    e.preventDefault();
    setCategories([...categories, addNewIncCategory]);
    dispatch(addCategory(addNewIncCategory));
    setAddNewIncCategory('');
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
    dispatch(addIncome(formData.incomeAmt, selectedCategory));
    setFormData({
      incomeAmt: '',
      category: ''
    });
    setSelectedCategory('');
  };

  return (
    <Container maxWidth='sm' sx={{ mt: 5 }}>
      <Typography variant='h4' align='center' gutterBottom>
        Add an Income
      </Typography>
      <Paper variant='outlined' sx={{ p: 3, mb: 2 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='incomeAmt'
                label='Income Amount'
                variant='outlined'
                value={formData.incomeAmt}
                onChange={handleChange}
                name='incomeAmt'
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='incomeCategoryLabel'>Income Category</InputLabel>
                <Select
                  labelId='incomeCategoryLabel'
                  id='incomeCategory'
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  label='Income Category'
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
                Add Income
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Paper variant='outlined' sx={{ p: 3 }}>
        <form onSubmit={handleAddIncomeCategory}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='newCategory'
                label='Add Income Category'
                variant='outlined'
                value={addNewIncCategory}
                onChange={e => setAddNewIncCategory(e.target.value)}
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

export default IncomeForm;
