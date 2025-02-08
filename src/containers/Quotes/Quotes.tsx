import CategoryNavBar from '../../components/CategoryNavBar/CategoryNavBar.tsx';
import { useCallback, useEffect, useState } from 'react';
import { IQuote, IQuoteApi, ITitle } from '../../types';
import axiosApi from '../../axiosApi.ts';
import { useParams } from 'react-router-dom';
import QuoteItem from '../../components/QuoteItem/QuoteItem.tsx';
import Loader from '../../components/UI/Loader/Loader.tsx';
import { Container, Typography } from '@mui/material';

const Quotes = () => {
  const [quotesList, setQuotesList] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState(false);
  const {category} = useParams();
  const categoryTitles: ITitle = {
    'star-wars': 'Star Wars',
    'famous-people': 'Famous People',
    'saying': 'Saying',
    'humor': 'Humor',
    'motivational': 'Motivational',
    'all': 'All',
  };

  const fetchQuotes = useCallback(async () => {
    try {
      setLoading(true);

      let URL = `quotes.json?orderBy="category"&equalTo="${category}"`
      if (!category || category === 'all') {
        URL = 'quotes.json'
      }

      const response = await axiosApi<IQuoteApi>(URL);
      if (response.data) {
        const quotesObject = response.data;
        const quotesObjectKeys = Object.keys(quotesObject);
        const quotesArr = quotesObjectKeys.map(key => {
          return {
            id: key,
            ...quotesObject[key],
          };
        })
        setQuotesList(quotesArr.reverse());
      } else {
        setQuotesList([]);
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    void fetchQuotes()
  }, [fetchQuotes])

  const deleteQuote = async (quote: IQuote) => {
    if (quote.id) {
      try {
        setLoading(true);
        await axiosApi.delete<IQuoteApi>(`quotes/${quote.id}.json`);
        setQuotesList([]);
        void fetchQuotes();
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    }
  }

  let quotes = (
    <>
      {quotesList.map((quote) => (
        <QuoteItem quote={quote} key={quote.id} onDeleteQuote={() => deleteQuote(quote)}/>
      ))
      }
    </>
  )

  if (loading) quotes = <Loader/>

  let title = '';
  if (category) {
    title = `${categoryTitles[category]} Quotes`;
  } else {
    title = 'All Quotes';
  }

  return (
    <>
      <Container maxWidth="lg">
        <CategoryNavBar/>
        <Typography textAlign={'center'} mt={5} mb={3} variant="h4">{title}</Typography>
        {quotes}
      </Container>
    </>
  );
};

export default Quotes;