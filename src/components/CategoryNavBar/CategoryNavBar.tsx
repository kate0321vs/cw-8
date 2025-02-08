import { Button, List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';

const CategoryNavBar = () => {
  const categories = [
    {title: 'All', id: 'all'},
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous people', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humor', id: 'humor'},
    {title: 'Motivational', id: 'motivational'},
  ]
  return (
    <List sx={{display: 'flex', flexDirection: 'row', gap: 2}}>
      {categories.map((category) => (
        <ListItem key={category.id} sx={{width: 'auto', padding: '0'}}>
          <Button
            sx={{paddingX: '20px'}}
            color="primary"
            component={NavLink}
            to={`/quotes/${category.id}`}
          >
            {category.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryNavBar;