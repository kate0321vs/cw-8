import Quotes from './containers/Quotes/Quotes.tsx';
import AddQuote from './containers/AddQuote/AddQuote.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import EditQuote from './components/EditQuote/EditQuote.tsx';

const App = () => {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Container maxWidth="xl">
        <Routes>
          <Route path="/"
                 element={<Quotes/>}/>
          <Route path="/quotes"
                 element={<Quotes />} />
          <Route path="/quotes/:category"
                 element={<Quotes />} />
          <Route path="/quotes/add-quote"
                 element={<AddQuote/>}/>
          <Route path="/quotes/:id/edit"
                 element={<EditQuote/>}/>
          <Route path="*"
                 element={<h1>Not found page</h1>}/>
        </Routes>
      </Container>
    </>
  );
};

export default App;