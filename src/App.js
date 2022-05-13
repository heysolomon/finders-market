import { BrowserRouter, Routes, Route } from "react-router-dom";
import Congrate from "./view/Congrate";
import Personalinfo from "./view/landingpage/logisticreg/Personalinfo";
import VehicleReg from "./view/landingpage/logisticreg/VehicleReg";
import Service from "./view/landingpage/Service";



import Business from "./view/landingpage/signin/Business";

import EmailVari from "./view/landingpage/signin/EmaillVeri";
import Login from "./view/landingpage/signin/Login";
import Signin from "./view/landingpage/signin/Signin";
import Space from "./view/landingpage/storage/Space";
import StorageSignin from "./view/landingpage/storage/StorageSignin";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/signin" element={<Signin />} />
  <Route path="/business" element={<Business />} />
  <Route path="/emailvari" element={<EmailVari />} />
  <Route path="/congratulation" element={<Congrate />} />
  <Route path="/service" element={<Service />} />
  <Route path="/Vehiclereg" element={<VehicleReg />} />
  <Route path="/Personalinfo" element={<Personalinfo />} />
  <Route path="/storageSignin" element={<StorageSignin />} />
  <Route path="/space" element={<Space />} />





</Routes>

</BrowserRouter>
  );
}

export default App;
