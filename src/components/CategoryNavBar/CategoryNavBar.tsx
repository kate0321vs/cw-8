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
      <List sx={{ width: '250px'}}>
        {categories.map((category) => (
          <ListItem key={category.id}
                    sx={{padding: '0', borderBottom: '1px solid darkblue'}}>
            <Button sx={{paddingLeft: '20px', width:'100%', justifyContent: "flex-start"}}
                    color='primary'
                    component={NavLink}
                    to={`/quotes/${category.id}`}>
              {category.title}
            </Button>
          </ListItem>
        ))}
      </List>
  );
};

export default CategoryNavBar;