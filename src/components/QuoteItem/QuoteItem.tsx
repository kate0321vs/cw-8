import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { IQuote } from '../../types';
import { NavLink } from 'react-router-dom';

interface Props {
  quote: IQuote;
}

const QuoteItem: React.FC<Props> = ({quote}) => {
  return (
    <>
      <Card variant="outlined" sx={{minWidth: 275, mb: 5}}>
        <CardContent>
          <Typography gutterBottom sx={{fontSize: 19}}>
            {quote.quote}
          </Typography>
          <hr/>
          <Typography variant='body2' gutterBottom sx={{fontSize: 19}}>
            {quote.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={NavLink} to={`/posts/${quote.id}/edit`}  size="small">Edit</Button>
          <Button color='error' size="small">Delete</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default QuoteItem;