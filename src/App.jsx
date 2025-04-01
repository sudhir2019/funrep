// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



import Home from './pages/Home';
import Contact from './pages/Contact';
import PointTransfer from './pages/PointTransfer';
import Logout from './pages/Logout';
import ResetPinPassword from './pages/ResetPinPassword';
import ChangePin from './pages/ChangePin';
import ChangePassword from './pages/ChangePassword';
import Dashboard from './pages/Dashboard';
import UpdateProfile from './pages/UpdateProfile';
import ChildRegistration from './pages/ChildRegistration';
import MemType from './pages/MemType';
import DrawDetails from './pages/DrawDetails';

const App = () => {
  return (
    <Router>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/PointTransfer" element={<PointTransfer />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/ChildRegistration" element={<ChildRegistration />} />
        <Route path="/DrawDetails" element={<DrawDetails />} />
        <Route path="/UpdateProfile" element={<UpdateProfile />} />
        <Route path="/ChangePin" element={<ChangePin />} />
        <Route path="/ResetPinPassword" element={<ResetPinPassword />} />
        <Route path="/MemType" element={<MemType />} />
        <Route path="/Logout" element={<Logout />} />
      </Routes>
    
    </Router>
  );
};

export default App;
