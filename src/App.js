import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Congrate from "./view/Congrate";
import Farmer from "./view/dashboard/Farmer";
import Storage from "./view/dashboard/Storage";

import Logistic from "./view/dashboard/Logistic";


import Notification from "./view/dashboard/Notification";
import Personalinfo from "./view/landingpage/logisticreg/Personalinfo";
import VehicleReg from "./view/landingpage/logisticreg/VehicleReg";
import Service from "./view/landingpage/Service";



import Business from "./view/landingpage/signin/Business";

import EmailVari from "./view/landingpage/signin/EmaillVeri";
import Login from "./view/landingpage/signin/Login";
import Signin from "./view/landingpage/signin/Signin";
import User from "./view/landingpage/signin/User";


function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signin" element={<Signin />} />
  <Route path="/Usersignin" element={<User />} />
  <Route path="/business" element={<Business />} />
  <Route path="/emailvari" element={<EmailVari />} />
  <Route path="/congratulation" element={<Congrate />} />
  <Route path="/service" element={<Service />} />
  <Route path="/Vehiclereg" element={<VehicleReg />} />
  <Route path="/Personalinfo" element={<Personalinfo />} />
  

  <Route path="/Dashboard" element={<Dashboard />} />
  <Route path="/notification" element={<Notification />} />
  <Route path="/farmer" element={<Farmer />} />
  <Route path="/storage" element={<Storage />} />
  <Route path="/logistic" element={<Logistic />} />
  






</Routes>

</BrowserRouter>
  );
}

export default App;
