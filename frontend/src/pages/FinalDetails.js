import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FinalDetails = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleConfirmClick = () => {
    if (!isChecked) {
      alert("Please accept the Terms of Service before confirming.");
    } else {
      
      console.log("Booking confirmed!");
      navigate("/bookingconfirm"); // Redirect to the desired page
    }
  };

  return (
    <div className="bg-shade">
      <div className="__container">
        <div className="py-32">
          <div>
            <div className="text-center py-">
              <h2 className="text-primary text-3xl pb-2 font-bold">You're One Step Away!</h2>
              <p className="font-semibold">Review your booking details carefully</p>
              <p className="font-semibold pb-10">and click "Book Now" when you're ready.</p>
              <h2 className="text-primary text-xl font-bold pb-4">Booking Details</h2>
            </div>
            <div className="bg-light flex flex-col justify-center px-10">
              <h2 className="text-center pt-3 pb-5 text-primary text-xl font-bold">ID# LABC123</h2>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>Name: Drei Loreto</p>
                <p>Booking ID: LABC123</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>Car Type: Luxury</p>
                <p>Pick-Up Date: June 28, 2023</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>Unit: Testla Model Y</p>
                <p>Return Date: June 28, 2023</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>Daily Price: Php 20,000</p>
                <p>Total Days: 2 Days</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between font-bold">
                <p>Cargo Protect: Yes</p>
                <p>Driving Preference: Self-Drive</p>
              </div>
              <h2 className="py-5 text-center text-primary font-bold text-2xl">Total Rent Price</h2>
              <h2 className="py-5 text-center text-primary font-bold text-2xl">Php 45,500</h2>
              <div className="flex justify-center sm:x items-center">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <p className="pl-4">
                  I confirm that I have read, understood, and accepted the Terms of Service.
                </p>
              </div>
              <div className="pt-10 pb-20 text-center">
                <button
                  className="py-2 px-10 bg-button text-white rounded-lg"
                  onClick={handleConfirmClick}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
