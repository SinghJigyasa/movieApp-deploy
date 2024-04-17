import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
      setInputValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleClick = () => {
    if(inputValue.email){
        const result = inputValue.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);
        console.log("Result:", result);
        navigate('/home');
        localStorage.setItem("userdetails", JSON.stringify(inputValue.email));
        setErrorMessage("")
    }else{
        setErrorMessage("Please enter your email-Id.");
    }
       
       
    //   axios.post('http://localhost:8080/login', inputValue)
    //       .then(res => {
    //           if (res.status === 200) {
    //               localStorage.setItem("userdetails", JSON.stringify(res.data.result));
    //               navigate('/home');
    //           } 
    //       })
    //       .catch(err => {
    //           console.log(err);
    //           setErrorMessage("Invalid credentials. Please check your email and password.");
    //       });
  };

  return (
    <section className="login vh-100 d-flex align-items-center  justify-content-center">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12 mx-auto">
                    <div className="card card-body shadow-md rounded-4 border-0 p-lg-5">
                        <h1 className="h2 text-danger text-center fw-bold">Movie App</h1>
                        <form>
                            <h1 className="font-bold items-center py-3 px-2 justify-center flex underline text-lg">Login to your account</h1>
                            {errorMessage && <div className="text-red-500 text-sm mb-4">{errorMessage}</div>}
                            <div className="mb-4 pt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Email Address
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  bg-gray-200 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} name="email" type="email" placeholder="you@example.com" />
                            </div>
                            {/* <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3  bg-gray-200 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="pass" onChange={handleChange} type="password" placeholder="******************" />
                            </div> */}
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button" onClick={handleClick}>
                                    Sign In
                                </button>
                                <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to='/signup'>
                                    New User?
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
          
    
  );
};

export default Login;