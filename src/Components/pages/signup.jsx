function SignUp () {
     return(
         <div className='title'>
            <form action="">

                 <h1 className='text-5xl font-semibold'>Sign Up</h1>

                 <p>Enter the following details to sign up</p>
                 <br></br>

                 <div className='input-box mb-4'>
                     <input type="text" placeholder="Name" required className="border border-black rounded-md p-2 w-full" />
                 </div>


                 <div className='input-box'>
                     <input type="email" placeholder="Email" required className="border border-black rounded-md p-2 w-full" />
                 </div>

                 <div className='input-box'>
                     <input type="text" placeholder="Phone Number" required className="border border-black rounded-md p-2 w-full" />
                 </div>

                 <div className='input-box'>
                     <input type="password" placeholder="Password" required className="border border-black rounded-md p-2 w-full" />
                 </div>
                 <br></br>

                 <button type="submit" className="bg-black text-white px-20 py-2 rounded-md w-full">
                     Sign Up
                 </button>

             </form>
         </div>
     )
 }