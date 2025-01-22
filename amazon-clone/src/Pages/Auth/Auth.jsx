import React,{useState} from 'react';
import classes from './Signup.module.css'
import { Link } from 'react-router-dom';
// import LayOut from '../../components/LayOut/LayOut';
import {auth} from '../../Utility/firebase' 
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const Auth = () => {

  const [email ,setEmail]=useState('');
  const [password ,setPassword]=useState('');
  const [error,setError]=useState('')
  // console.log(email,password);

  const authHandler= async(e)=>{
    e.preventDefault();
    // console.log(e.target.name);
    if(e.target.name=='signin'){
      signInWithEmailAndPassword(auth, email,password).then((userInfo)=>{
         console.log(userInfo);
      }).catch((err)=>{
        console.log(err);
      })

    }else{
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        console.log(userInfo);
      }).catch((err)=>{
        console.log(err);
      })

    }
  }
    return (
      
            <section className={classes.login}>
              <Link>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png' alt='react logo black'/>
              </Link>
              <div className={classes.login__container}>
                <h2>Sign In</h2>
                <form action="">
                  <div>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id='password' />
                  </div>
                  <button type='submit' onClick={authHandler} name='signin' className={classes.login__signInButton}>Sign In</button>

                </form>
                <p>
                  By signing-in you agree to the AMAZON FAKE CLONE conditions of use and sale. Please see our privacy Notice. Our Cookies  Notice and
                  our Interest-Based Ads Notice. 
                </p>
                <button type='submit' onClick={authHandler}  name='signup' className={classes.login__registerButton}>Create Your  Amazon Account</button>
              </div>

            </section>
       
    );
}

export default Auth;
