import { Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Luxury,
  Business,
  Signin,
  Reservations,
  Location,
  Pickup,
  Bridal,
  Family,
  Casual,
  Testimonial,
  Driver,
} from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="luxury" element={<Luxury />}></Route>
        <Route path="business" element={<Business />}></Route>
        <Route path="signin" element={<Signin />}></Route>
        <Route path="location" element={<Location />}></Route>
        <Route path="reservation" element={<Reservations />}></Route>
        <Route path="pickup" element={<Pickup />}></Route>
        <Route path="bridal" element={<Bridal />}></Route>
        <Route path="family" element={<Family />}></Route>
        <Route path="casual" element={<Casual />}></Route>
        <Route path="testimonial" element={<Testimonial />}></Route>
        <Route path="driver" element={<Driver />}></Route>
      </Routes>
    </div>
  );
};
