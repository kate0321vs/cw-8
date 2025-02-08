import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loader;