import { Button, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { IQuoteForm } from '../../types';
import { useState } from 'react';
import * as React from 'react';

interface Props {
  isEdit?: boolean;
  onSubmitAction: (quote: IQuoteForm) => void;
}

const initialState = {
  category: '',
  author: '',
  quote: '',
}

const FormQuote: React.FC<Props> = ({isEdit = false, onSubmitAction}) => {
  const [form, setForm] = useState<IQuoteForm>(initialState)

  const categories = [
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous people', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humor', id: 'humor'},
    {title: 'Motivational', id: 'motivational'},
  ];

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onCategoryChange = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    setForm({
      ...form,
      category: value,
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitAction({...form});
  };

  return (
      <form onSubmit={onSubmit}>
        <Typography variant="h4" sx={{flexGrow: 1, textAlign: 'center'}}>{isEdit ? 'Edit ' : 'Add new '}
          quote</Typography>

        <Grid container spacing={2} sx={{mx: 'auto', width: '50%', mt: 4}}>
          <Grid size={12}>
                <Select
                  name="category"
                  value={form.category}
                  onChange={onCategoryChange}
                  required
                  fullWidth
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    Category
                  </MenuItem>
                  {categories.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.title}
                    </MenuItem>
                  ))}
                </Select>
            </Grid>

          <Grid size={12}>
            <TextField sx={{width: '100%'}}
                       label="Author"
                       name="author"
                       variant="outlined"
                       value={form.author}
                       onChange={onInputChange}
                       required/>
          </Grid>
          <Grid size={12}>
            <TextField sx={{width: '100%'}}
                       label="Quote"
                       name="quote"
                       variant="outlined"
                       multiline
                       rows={3}
                       value={form.quote}
                       onChange={onInputChange}
                       required/>

          </Grid>
          <Grid size={12}>
            <Button sx={{width: '100%'}} type="submit" variant="contained">{isEdit ? 'Edit' : 'Add'}</Button>
          </Grid>
        </Grid>
      </form>
);
};

export default FormQuote;