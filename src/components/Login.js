import React from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Center from './Center';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router';

const getFreshModel= () => ({
    name:'',
    email:''
})

export default function Login() {

let navigate = useNavigate();

const validate = () => {
    let temp = {}
    temp.email = (/\S+@\S+\.\S+/).test(values.email)?"":"Email is not valid."
    temp.name = values.name!==""?"":"This field is required."
    temp.name = values.name!==""?"":"This field is required."
    setErrors(temp);
    return Object.values(temp).every(x => x === "")
}

    const {        
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModel);

    const login = e => {
        e.preventDefault();
        if(validate()){
            console.log(values);
        }
    }


    return(
      <Center>
          <Card sx={{ width: 400 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ my: 3 }}>
                      Log In
                  </Typography>
                  <Box sx={{
                      '& .MuiTextField-root': {
                          m: 1,
                          width: '90%'
                      }
                  }}>
                      <form noValidate autoComplete="off" onSubmit={login}>
                          <TextField
                              label="Email"
                              name="email"
                              value={values.email}
                              onChange={handleInputChange}
                              variant="outlined"
                              {...(errors.email && {error:true, helperText:errors.email})}
                              />
                          <TextField
                              label="Password"
                              name="name"
                              type='password'
                              value={values.name}
                              onChange={handleInputChange}
                              variant="outlined"
                              {...(errors.name && {error:true, helperText:errors.name})}
                              />
                          <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              sx={{ width: '90%', m: 2 }}>Log In</Button>
                          <Button
                              type="submit"
                              variant="contained"
                              size="large"
                              onClick={() => navigate('/')}
                              sx={{ width: '90%' }}>Return</Button>
                      </form>
                  </Box>
              </CardContent>
          </Card>
      </Center>
  )
}
