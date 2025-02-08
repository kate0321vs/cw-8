import CategoryNavBar from '../../components/CategoryNavBar/CategoryNavBar.tsx';
import { useCallback, useEffect, useState } from 'react';
import { IQuote, IQuoteApi } from '../../types';
import axiosApi from '../../axiosApi.ts';
import { useParams } from 'react-router-dom';
import QuoteItem from '../../components/QuoteItem/QuoteItem.tsx';
import Loader from '../../components/UI/Loader/Loader.tsx';
import { Typography } from '@mui/material';

const Quotes = () => {
  const [quotesList, setQuotesList] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState(false);
  const {category} = useParams();

  const fetchQuotes = useCallback(async () => {
    try{
      setLoading(true);

      let URL = `quotes.json?orderBy="category"&equalTo="${category}"`
      if (!category || category === 'all') {
        URL =  'quotes.json'
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
    }catch(e){
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
        }finally {
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

  return (
    <>
      <CategoryNavBar/>
      {category ? <Typography variant="h2">{category}</Typography> :
      <Typography variant="h2">all</Typography>}
      {quotes}
    </>
  );
};

export default Quotes;