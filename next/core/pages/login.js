import React, {useState} from 'react';
import Router from 'next/router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

export const Login = () => {
    const [csrfToken, setscrf] = useState('')

    React.useEffect(() => {

        fetch("http://localhost:8000/account/csrf/")
        .then((res) => {
          let csrfToken = res.headers.get("X-CSRFToken")
          setscrf(csrfToken);
        })
        .catch((err)=>{
          console.log(err)
        })
      }, [])
      console.log(csrfToken);

    return (
        <>
            Login
        </>
    )
}


export default Login;