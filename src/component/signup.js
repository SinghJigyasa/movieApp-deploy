import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"


const Singup=()=>{
    const [fieldData,setFieldData]= useState({})
    
    const handleChange=(e)=>{
        setFieldData(pre=>({...pre, [e.target.name]:e.target.value})) 
    }
    const handleClick=()=>{       
        console.log(fieldData);
        axios.post("http://localhost:8080/register",fieldData)
        .then(res=>{
            console.log(res.data);
        })
    }
    return(
      <div className="flex justify-center items-center h-screen bg-gray-100 ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
         <h1 className="font-bold items-center py-3 px-2 justify-center flex text-lg mb-4">Register your account</h1>
         <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="firstName" type="text" placeholder="First Name" onChange={handleChange}/>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lastName" type="text" placeholder="Last Name" onChange={handleChange}/>
          </div>
        </div>
       
        <div className="flex flex-wrap mx-6 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="text" placeholder="you@example.com" onChange={handleChange}/>
        </div>
        
        <div className="flex flex-wrap mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name="pass" type="password" placeholder="Password" onChange={handleChange}/>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="confirm-password" type="password" placeholder="Confirm Password"/>
          </div>
        </div>
        <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-6 rounded-full focus:outline-none focus:shadow-outline" type="button" onClick={handleClick}>
          sign Up
        </button>
        <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 me-6" to='/'>
          Existing User?
        </Link>
        </div>
      </form>
      </div>
    )
}
export default Singup;