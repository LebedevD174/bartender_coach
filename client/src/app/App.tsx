import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationPage from '../components/Auth/RegistrationPage';
import AuthorizationPage from '../components/Auth/AuthorizationPage';
import Main from '../components/Main/components/Main';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element = {<Main/>}>
              <Route path='registration' element = {<RegistrationPage/>}/>
              <Route path='authorization' element = {<AuthorizationPage/>}/>
          </Route>
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
