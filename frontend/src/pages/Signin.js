import {NavLink} from "react-router-dom"

export const SignIn = () => {
  return (
    <div>
        <div className="mt-24 flex flex-col items-center justify-center">
            <div>
                <h2 className="text-5xl pb-5">Sign In</h2>
            </div>
            <form action="" className='w-full container1'>
            <div className=" mb-4">
                <label className=" text-sm font-medium text-gray-700" for="username">Username</label>
                <input
                    type="text"
                    id="username"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your Username"
                />
                </div>
                <div className=" mb-4">
                <label className=" text-sm font-medium text-gray-700" for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500  w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    placeholder="Enter your Password"
                />
                </div>

                <div className="flex flex-col mb-4">
  <div className="flex justify-center">
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        defaultChecked
        className="form-checkbox"
      />
      <span className="ml-2">Remember me</span>
    </label>
  </div>

  <div className="flex justify-end">
    <a href="contact.html" className="text-blue-500">Forgot password?</a>
  </div>

  <div className="flex justify-center">
    <a href="reservation.html" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Sign In</a>
  </div>
</div>

<div className="text-center mb-10">
  <p>
    Not a member?&nbsp;&nbsp;
    <NavLink to="/signup" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"> Register</NavLink>
  </p>
</div>




            </form>
        </div>
    </div>
  );
};
