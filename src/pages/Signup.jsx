import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

export default function Signup() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const changeHandler =(e)=>{
    setFormData({...formData, [e.target.id]: e.target.value })
  }

  const navigate = useNavigate();

  const submitHandle = async (e)=>{
    e.preventDefault()
    setError(false);
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          'Content-type': "application/json",
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json()
      console.log(data);
      setLoading(false);
      setError(false);
      if(data.success === false){
        setError(true);
      }else{
        navigate('/sign-in')
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Signup</h1>
      <form className='flex flex-col gap-4' onSubmit={submitHandle} >
        <input onChange={changeHandler} type="text" placeholder='userName' id='username' className='bg-slate-100 p-3 rounded-lg' />
        <input onChange={changeHandler} type="email" placeholder='email' id='email' className='bg-slate-100 p-3 rounded-lg' />
        <input onChange={changeHandler} type="password" placeholder='password' id='password' className='bg-slate-100 p-3 rounded-lg' />
        <button onChange={changeHandler} disabled={loading} type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'> {loading ? "......" :"Signup" } </button>
        <OAuth/>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>have an accound? <Link to='/sign-in'> <span className='text-blue-500'>Sign In</span></Link> </p>
      </div>
      <p className='text-red-500 font-bold'>{error && "somethng went wrong" }</p>
    </div>
  )
}
