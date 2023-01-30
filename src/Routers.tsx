import React from 'react';
import { SignUp, SignIn } from 'pages/auth';
import { Routes, Route } from 'react-router-dom';
import { CreateLights } from 'pages/CreateLights';
import { HomePage } from 'pages/HomePage/';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/lights/add" element={<CreateLights />} />
    </Routes>
  );
};

export default Routers;
