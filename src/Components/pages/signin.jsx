
function SignIn() {
    return (
        <div className='title'>
            <form action="">

                <h1 className='text-5xl font-semibold'>Sign In</h1>

                <p>Enter your username and password to sign in</p>
                <br></br>

                <div className='input-box mb-4'>
                    <input type="text" placeholder="Username" required className="border border-black rounded-md p-2 w-full" />
                </div>


                <div className='input-box'>
                    <input type="password" placeholder="Password" required className="border border-black rounded-md p-2 w-full" />
                </div>
                <br></br>

                <div className='keep-logged-in flex items-center justify-between'>
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" /> Keep me logged in
                    </label>
                    <a href="#" className="ml-4">Forgot password?</a>
                </div>
                <br></br>

                <button type="submit" className="bg-black text-white px-20 py-2 rounded-md w-full">
                    Sign In
                </button>

                <div className='register'>
                <p>Not registered yet?<a href="#" className="font-bold"> Create an Account </a></p>
                </div>


            </form>
        </div>
    )
}
  
  export default SignIn
  
