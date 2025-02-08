import FormQuote from '../../components/FormQuote/FormQuote.tsx';
import axiosApi from '../../axiosApi.ts';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IQuoteForm } from '../../types';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader.tsx';

const AddQuote = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitNewQuote = async (quote: IQuoteForm) => {
    try {
      setLoading(true);
      await axiosApi.post("quotes.json", quote);
      toast.success('Quote was added Successfully!');
      navigate('/');
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? <Loader/> :
        <FormQuote onSubmitAction={onSubmitNewQuote}/>
      }
    </>
  );
};

export default AddQuote;