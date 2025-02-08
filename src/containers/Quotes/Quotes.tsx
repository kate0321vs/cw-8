import CategoryNavBar from '../../components/CategoryNavBar/CategoryNavBar.tsx';
import { useCallback, useEffect, useState } from 'react';
import { IQuote, IQuoteApi } from '../../types';
import axiosApi from '../../axiosApi.ts';
import { useParams } from 'react-router-dom';

const Quotes = () => {
  const [quotesList, setQuotesList] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState(false);
  const {category} = useParams();

  const fetchQuotes = useCallback(async () => {
    if (!category) return;
    try{
      setLoading(true);

      let URL = 'quotes.json'
      if (category && category !== 'all') {
        URL = `quotes.json?orderBy="category"&equalTo="${category}"`;
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
        setQuotesList(quotesArr);
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

  console.log(quotesList)

  return (
    <>
      <CategoryNavBar/>
    </>
  );
};

export default Quotes;