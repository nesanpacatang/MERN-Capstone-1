import { FaBuilding, FaPlus } from 'react-icons/fa';
import Upload from "../assets/icons/upload-icon.png"
import { useState } from 'react';

export const Driver = () => {
  const [selfDrive, setSelfDrive] = useState(false);
  const [hireDriver, setHireDriver] = useState(false);

  const handleSelfDriveChange = () => {
    setSelfDrive(!selfDrive);
  };

  const handleHireDriverChange = () => {
    setHireDriver(!hireDriver);
  };

  // Information
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [suffix, setSuffix] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [driverLicenseNumber, setDriverLicenseNumber] = useState('');
  


  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSuffixChange = (event) => {
    setSuffix(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleNationalityChange = (event) => {
    setNationality(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDriverLicenseNumberChange = (event) => {
    setDriverLicenseNumber(event.target.value);
  };

  return (
    <div>
      <div className="bg-shade py-40">
        <div className="mx-auto md:w-11/12 rounded-lg bg-cyan-600 z-40 relative bottom-16 sm:bottom-10 px-2 lg:px-5 xl:px-5 py-5 mb-5" id="filter">
          <form action="">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-1 justify-center items-center">
              {/* Car specs */}
              <div className="flex justify-center items-center rounded-lg bg-white py-2 col-span-2 lg:col-span-1">
                <div className="relative">
                  <select
                    className="rounded-lg pl-8 focus:ring-0 border-none"
                    id="location"
                    name="location"
                    placeholder="Pick-up Branch"
                  >
                    <option disabled value="">
                      Branch
                    </option>
                    <option value="Manila">Manila</option>
                    <option value="Pasay">Pasay</option>
                    <option value="Pasig">Pasig</option>
                    <option value="Makati">Makati</option>
                  </select>
                  <div className="absolute top-2 left-1">
                    <FaBuilding size="1.5rem" className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Pick-up Date */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center relative">
                  <label htmlFor="pickupDate" className="pt-2 text-sm font-bold">
                    Pickup Date:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                  />
                </div>
              </div>

              {/* Pick-up Time */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center">
                  <label htmlFor="pickupTime" className="pt-2 text-sm font-bold">
                    Time:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="time"
                    id="pickupTime"
                    name="pickupTime"
                  />
                </div>
              </div>

              {/* Return Date */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center">
                  <label htmlFor="returnDate" className="pt-2 text-sm font-bold">
                    Return Date:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="date"
                    id="returnDate"
                    name="returnDate"
                  />
                </div>
              </div>

              {/* Return Time */}
              <div className="flex justify-center items-center rounded-lg bg-white">
                <div className="flex flex-col justify-center">
                  <label htmlFor="returnTime" className="pt-2 text-sm font-bold">
                    Time:
                  </label>
                  <input
                    className="border-none rounded-lg focus:ring-0 p-0 pb-1"
                    type="time"
                    id="returnTime"
                    name="returnTime"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="container">
          <form action="">
            <div>
              <h2 className='text-primary text-2xl font-bold pb-5'>Driving Preference</h2>
              <p className='font-bold pb-3'>Choose from the options below:</p>
            </div>

            <div>
              <div className='flex pl-5 pb-4'>
                <label>
                  <input
                    type="checkbox"
                    checked={selfDrive}
                    onChange={handleSelfDriveChange}
                    
                  />
                 
                </label>
                <p className='pl-4'>Self Drive</p>
              </div>

              <div className='flex pl-5 pb-4'>
                <label>
                  <input
                    type="checkbox"
                    checked={hireDriver}
                    onChange={handleHireDriverChange}
                  />
                </label>
                <p className='pl-4'>Hire a Driver</p>
              </div>
            </div>

            <div>
                <h2 className='text-primary text-2xl pb-4 font-bold'>Information</h2>
                <h3 className='font-bold text-2xl pb-4'>Main Driver</h3>
                <div className="px-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 ">

                    <div className="flex flex-col justify-center">
                        <label htmlFor="" className='font-bold text-lg'>Full Name</label>
                        <input
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        />
                        <label className="flex">First Name</label>
                        
                    </div>       


                    <div className='flex flex-col pt-7'>
                        <div className="">
                            <input
                            type="text"
                            value={middleName}
                            onChange={handleMiddleNameChange}
                            className='w-full'
                            
                            />
                            <label className='flex'>Middle Name</label>
                        </div>
                    </div>
                    <div  className="flex flex-col pt-7">
                        <div>
                            <input
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                            className='w-full'
                            />
                            <label className='flex'>Last Name</label>
                        </div>
                    </div>

                    <div className='flex flex-col pt-7'>
                        
                            <input
                            type="text"
                            value={suffix}
                            onChange={handleSuffixChange}
                            className='w-full'
                            />
                            <label className='flex'>Suffix</label>
                              
                    </div>

                    <div className="flex flex-col ">
                            <label htmlFor="birthdate" className='font-bold text-lg'>Birthdate</label>
                            <input
                            type="date"
                            id='birthdate'
                            value={birthdate}
                            onChange={handleBirthdateChange}
                            className="w-full" // Adjust the width for birthdate
                            />
                            <label className="flex">MM/DD/YYYY</label>
                        
                    </div>


                    <div className="flex flex-col pb-6">
                        <label htmlFor="age" className='font-bold text-lg'>Age</label>
                        <input
                        type="text"
                        id='age'
                        value={age}
                        onChange={handleAgeChange}
                        className='w-full'
                        />
                    </div>

                    <div  className="flex flex-col md:pb-6">
                            <label htmlFor="nationality" className='font-bold text-lg'>Nationality</label>
                            <input
                            type="text"
                            id='nationality'
                            value={nationality}
                            onChange={handleNationalityChange}
                            className='w-full'
                            />
                            
                        
                    </div>

                    <div className='flex flex-col'>
                            <label htmlFor="phonenumber" className='font-bold text-lg'>Phone Number</label>
                                <input
                                type="text"
                                id='phonenumber'
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                className='w-full'
                                />
                            <label className='flex'>(Area Code) XXX-XX-XX</label>
                        
                    </div>

                    <div className="flex flex-col lg:pb-6">
                        <label htmlFor="email" className='font-bold text-lg'>Email Address</label>
                        <input
                            type="email"
                            id='email'
                            value={email}
                            onChange={handleEmailChange}
                            className='w-full'
                        />
                        <label className='flex'>example@test.com</label>
                        
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="license" className='font-bold text-lg'>Driver License No</label>
                        <input
                            type="text"
                            id='license'
                            value={driverLicenseNumber}
                            onChange={handleDriverLicenseNumberChange}
                            className='w-full'
                        />
                        <label className='flex'>*Located the number on your Driver's License ID.</label>
                        
                    </div>
                </div>
                
                <div> {/* Start Upload FIle */}
                    <div>
                        <h2 className='pt-5 font-bold text-lg'>Upload Driver's License ID Photo</h2>
                    </div>
                    <div className='border border-primary'>
                        <div className='flex flex-col justify-center items-center'> 
                            <img src={Upload} alt="" className='h-20 w-20'/>
                            <p>Upload a File</p>
                            <p>Drag and drop files here</p>
                        </div>
                        
                    </div>

                    <div className='flex py-5'>
                    <button><FaPlus className="mr-2" /></button>
                        <div>
                            <h2>
                                Add Another Driver 
                            </h2>
                        </div>
                        
                    </div>
                    
                </div> {/* End Upload FIle */}

                <h3 className='font-bold text-2xl pb-4'>Driver 2</h3>
                <div className="px-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 ">

                    <div className="flex flex-col justify-center">
                        <label htmlFor="" className='font-bold text-lg'>Full Name</label>
                        <input
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        />
                        <label className="flex">First Name</label>
                        
                    </div>       


                    <div className='flex flex-col pt-7'>
                        
                            <input
                            type="text"
                            value={middleName}
                            onChange={handleMiddleNameChange}
                            className='w-full'
                            
                            />
                            <label className='flex'>Middle Name</label>
                        
                    </div>
                    <div  className="flex flex-col pt-7">
                        
                            <input
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                            className='w-full'
                            />
                            <label className='flex'>Last Name</label>
                        
                    </div>

                    <div className='flex flex-col pt-7'>
                        
                            <input
                            type="text"
                            value={suffix}
                            onChange={handleSuffixChange}
                            className='w-full'
                            />
                            <label className='flex'>Suffix</label>
                                
                    </div>

                    <div className="flex flex-col ">
                            <label htmlFor="birthdate" className='font-bold text-lg'>Birthdate</label>
                            <input
                            type="date"
                            id='birthdate'
                            value={birthdate}
                            onChange={handleBirthdateChange}
                            className="w-full" // Adjust the width for birthdate
                            />
                            <label className="flex">MM/DD/YYYY</label>
                        
                    </div>


                    <div className="flex flex-col pb-6">
                        <label htmlFor="age" className='font-bold text-lg'>Age</label>
                        <input
                        type="text"
                        id='age'
                        value={age}
                        onChange={handleAgeChange}
                        className='w-full'
                        />
                    </div>

                    <div  className="flex flex-col md:pb-6">
                            <label htmlFor="nationality" className='font-bold text-lg'>Nationality</label>
                            <input
                            type="text"
                            id='nationality'
                            value={nationality}
                            onChange={handleNationalityChange}
                            className='w-full'
                            />
                            
                        
                    </div>

                    <div className='flex flex-col'>
                            <label htmlFor="phonenumber" className='font-bold text-lg'>Phone Number</label>
                                <input
                                type="text"
                                id='phonenumber'
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                className='w-full'
                                />
                            <label className='flex'>(Area Code) XXX-XX-XX</label>
                        
                    </div>

                    <div className="flex flex-col lg:pb-6">
                        <label htmlFor="email" className='font-bold text-lg'>Email Address</label>
                        <input
                            type="email"
                            id='email'
                            value={email}
                            onChange={handleEmailChange}
                            className='w-full'
                        />
                        <label className='flex'>example@test.com</label>
                        
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="license" className='font-bold text-lg'>Driver License No</label>
                        <input
                            type="text"
                            id='license'
                            value={driverLicenseNumber}
                            onChange={handleDriverLicenseNumberChange}
                            className='w-full'
                        />
                        <label className='flex'>*Located the number on your Driver's License ID.</label>
                        
                    </div>
                </div>
                
                <div> {/* Start Upload FIle */}
                    <div>
                        <h2 className='pt-5 font-bold text-lg'>Upload Driver's License ID Photo</h2>
                    </div>
                    <div className='border border-primary'>
                        <div className='flex flex-col justify-center items-center'> 
                            <img src={Upload} alt="" className='h-20 w-20'/>
                            <p>Upload a File</p>
                            <p>Drag and drop files here</p>
                        </div>
                        
                    </div>

                    <div className='flex py-5'>
                    <button><FaPlus className="mr-2" /></button>
                        <div>
                            <h2>
                                Add Another Driver 
                            </h2>
                        </div>
                        
                    </div>
                    
                </div> {/* End Upload FIle */}






            </div> 
          </form>
        </div>
      </div>
    </div>
  );
};
