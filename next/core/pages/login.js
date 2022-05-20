import React, {useState } from 'react';

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