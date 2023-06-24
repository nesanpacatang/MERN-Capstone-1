import { FaBuilding, FaSearch, FaTimesCircle, FaFilter, FaUsers } from 'react-icons/fa';
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
              <h2>Driving Preference</h2>
              <p>Choose from the options below:</p>
            </div>

            <div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={selfDrive}
                    onChange={handleSelfDriveChange}
                  />
                  Self Drive
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={hireDriver}
                    onChange={handleHireDriverChange}
                  />
                  Hire a Driver
                </label>
              </div>
            </div>

            <div>
                <h2>Information</h2>
                <h3>Main Driver</h3>
                <div className="grid grid-cols-4 gap-2">
                <div className="flex flex-col items-center">
                    <label htmlFor="">Full Name</label>
                    <input
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    />
                    <label className="flex">First Name</label>
                    
                </div>       


                    <div className='flex flex-col items-center '>
                        <div className="">
                            <input
                            type="text"
                            value={middleName}
                            onChange={handleMiddleNameChange}
                            />
                            <label className='flex justify-start'>Middle Name</label>
                        </div>
                    </div>
                    <div  className="flex flex-col items-center">
                        <div>
                            <input
                            type="text"
                            value={lastName}
                            onChange={handleLastNameChange}
                            />
                            <label className='flex'>Last Name</label>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div>
                            <input
                            type="text"
                            value={suffix}
                            onChange={handleSuffixChange}
                            />
                            <label className='flex'>Suffix</label>
                        </div>        
                    </div>

                    <div className="flex flex-col items-center justify-start">
                        <div className="">
                            <input
                            type="date"
                            value={birthdate}
                            onChange={handleBirthdateChange}
                            className="w-52" // Adjust the width for birthdate
                            />
                            <label className="flex">Birthdate</label>
                        </div>
                    </div>


                    <div className="flex flex-col items-center justify-start">
                        <div className="">
                        <input
                        type="text"
                        value={age}
                        onChange={handleAgeChange}
                        />
                        <label className='flex justify-start'>Age</label>
                        </div>
                    </div>

                    <div  className="flex flex-col items-center">
                        <div>
                            <input
                            type="text"
                            value={nationality}
                            onChange={handleNationalityChange}
                            />
                            <label className='flex'>Nationality</label>
                        </div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div>
                            <input
                            type="text"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            />
                            <label className='flex'>Phone Number</label>
                        </div>        
                    </div>

                    <div className="flex flex-col items-center">
                        <div>
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label className='flex'>Email</label>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div>
                        <input
                            type="text"
                            value={driverLicenseNumber}
                            onChange={handleDriverLicenseNumberChange}
                        />
                        <label className='flex'>Driver's License Number</label>
                        </div>
                    </div>





                </div>






            </div> 
          </form>
        </div>
      </div>
    </div>
  );
};
