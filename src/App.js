import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import UserHomePage from "./UserHomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />        
        <Route path="/user_home" element={<UserHomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
