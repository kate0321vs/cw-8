import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { IQuote } from '../../types';
import { NavLink } from 'react-router-dom';

interface Props {
  quote: IQuote;
  onDeleteQuote: React.MouseEventHandler;
}

const QuoteItem: React.FC<Props> = ({quote, onDeleteQuote}) => {
  return (
    <>
      <Card variant="outlined" sx={{minWidth: 275, mb: 5}}>
        <CardContent>
          <Typography mt={2} gutterBottom sx={{fontSize: 19}}>
            «{quote.quote}»
          </Typography>
          <Typography mt={2} component="p" gutterBottom sx={{fontSize: 18}}>
            — {quote.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={NavLink} to={`/quotes/${quote.id}/edit`} size="small">Edit</Button>
          <Button onClick={onDeleteQuote} color="error" size="small">Delete</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default QuoteItem;