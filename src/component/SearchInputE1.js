import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, InputBase } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Snackbar, IconButton } from '@mui/material';
import Alert from '@mui/material/Alert';

const validationSchema = yup.object({
  search: yup.string('Enter your search query').required('* This field can not be empty'),
});

const SearchInputEl = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onSubmit = (values, actions) => {
    const { search } = values;
    if (search.trim()) {
      navigate(`/search/${search}`);
    } else {
      // Show a toast notification if the search field is empty
      setOpen(true);
    }
    actions.resetForm();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      search: '',
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <h1 style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', marginBottom:'20px', textAlign:'center'}}>
  Find the right Job for you
</h1>
      <form onSubmit={handleSubmit} style={{ width: '50vw' , minWidth: '100%' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <InputBase
          style={{ fontFamily: 'Montserrat, sans-serif' }}
            sx={{
              bgcolor: 'white',
              padding: '10px',
              color: 'rgba(0, 0, 0, 0.9)',
              marginRight: '10px',
              borderRadius: '4px',
              border: '1px solid rgb(232, 237, 235)',
              '&:focus': {
                borderColor: 'blue',
              },
              width: '100%'
             
            }}
            fullWidth={true}
            id="search"
            name="search"
            label="search"
            placeholder="Enter the job you want (e.g., Full stack engineer)"
            value={values.search}
            onChange={handleChange}
            error={touched.search && Boolean(errors.search)}
            color="primary"
            autoComplete="off"
            autoFocus={true}
          />
          <Button
           style={{ fontFamily: 'Montserrat, sans-serif' }}
            variant="contained"
            endIcon={<SearchIcon />}
            type="submit"
            sx={{
              width: '150px', // Fixed width
              height: '50px',
              padding:'0 10px' // Fixed height
            }}
          >
            Search
          </Button>
        </Box>
        <Box
         style={{ fontFamily: 'Montserrat, sans-serif', fontSize:'18px' }}
          component="span"
          sx={{
            color: 'pink',
            bgcolor: 'transparent',
            width: 'fit-content',
            padding: '10px',
            borderRadius: '10px',
          }}
        >
          {touched.search && errors.search}
        </Box>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert elevation={6} variant="filled" severity="error" onClose={handleClose}>
            Please enter a search query.
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
};

export default SearchInputEl;
