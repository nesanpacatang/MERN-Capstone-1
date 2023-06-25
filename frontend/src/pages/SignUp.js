export const SignUp = () => {
  return (
    <div>
      <div className=" mt-24 flex flex-col items-center justify-center">
        <div className="mb-5">
          <h2>SIGN UP FORM</h2>
        </div>
        <form action="">
          <div className="container grid md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              <div className="form-outline">
                <input
                  type="text"
                  id="firstname"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="First name"
                />
                <label htmlFor="firstname" className="form-label">
                  First name
                </label>
              </div>
            </div>
            <div>
              <div className="form-outline">
                <input
                  type="text"
                  id="middlename"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Middle name"
                />
                <label htmlFor="middlename" className="form-label">
                  Middle name
                </label>
              </div>
            </div>
            <div>
              <div className="form-outline">
                <input
                  type="text"
                  id="lastname"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Last name"
                />
                <label htmlFor="lastname" className="form-label">
                  Last name
                </label>
              </div>
            </div>
            <div>
              <div className="form-outline">
                <input
                  type="text"
                  id="suffix"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Suffix"
                />
                <label htmlFor="suffix" className="form-label">
                  Suffix
                </label>
              </div>
            </div>
            <div>
              <div className="form-outline">
                <input
                  type="date"
                  id="birthday"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Birthday"
                />
                <label htmlFor="birthday" className="form-label">
                  Birthday
                </label>
              </div>
            </div>
            <div>
              <div className="form-outline">
                <input
                  type="number"
                  id="age"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Age"
                />
                <label htmlFor="age" className="form-label">
                  Age
                </label>
              </div>
            </div>
            <div>
              <div className="form-outline">
                <input
                  type="text"
                  id="nationality"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Nationality"
                />
                <label htmlFor="nationality" className="form-label">
                  Nationality
                </label>
              </div>
            </div>
            <div>
              <div className="form-outline">
                <input
                  type="tel"
                  id="phonenumber"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Phone number"
                />
                <label htmlFor="phonenumber" className="form-label">
                  Phone number
                </label>
              </div>
            </div>
            <div>
              <div className="form-outline">
                <input
                  type="text"
                  id="username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Username"
                />
                <label htmlFor="username" className="form-label">
                  Username
                </label>
              </div>
            </div>
            <div>
              <div className="form-outline">
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Password"
                />
                <label htmlFor="password" className="form-label">
                  Password
                </label>
              </div>

              
            </div>
          </div>
          <div className="text-center pb-10"> 
          <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
              >
                Submit
              </button>

          </div>
          
        </form>
      </div>
    </div>
  );
};
