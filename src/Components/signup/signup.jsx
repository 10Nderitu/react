const Signup = () => {
    return (
      <div className='title'>
        <form action="">
          
        <h1 className='text-5xl'>Sign In</h1>
        
        <p>Enter your username and password to sign in</p>
        <br></br>
  
          <div className='input-box'>
          <input type="text" placeholder="Username" required />
          </div>
  
          <div className='input-box'>
          <input type="password" placeholder="Password" required />
          </div>
  
          <div className='keep logged in'>
          <label><input type="checkbox"/> Keep me logged in</label>
          <a href="#"> Forgot password?</a>
          </div>
  
          <button type='Submit'> Sign In</button>
  
          <div className='register'>
            <p>Not registered yet?<a href="#"> Create an account </a></p>
          </div>
  
        </form>
      </div>
    )
  }
  
  export default Signup
  