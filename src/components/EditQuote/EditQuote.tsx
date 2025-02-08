import FormQuote from '../FormQuote/FormQuote.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import axiosApi from '../../axiosApi.ts';
import { IQuoteForm } from '../../types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Loader from '../UI/Loader/Loader.tsx';

const EditQuote = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitNewQuote = async (quote: IQuoteForm) => {
    try {
      setLoading(true);
      await axiosApi.put(`quotes/${id}.json`, quote)
      toast.success('Quote was edited Successfully!');
      navigate(`/quotes/${quote.category}`);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }

  let form = (<FormQuote onSubmitAction={onSubmitNewQuote} isEdit id={id}/>)
  if (loading) form = <Loader/>

  return (
    <>
      {form}
    </>
  );
};

export default EditQuote;