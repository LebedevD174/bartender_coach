import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationPage from '../components/Auth/RegistrationPage';
import AuthorizationPage from '../components/Auth/AuthorizationPage';
import Main from '../components/Main/components/Main';
import MainPageCocktail from '../components/Main/components/MainPage';
import ProfilePage from '../components/Profile/ProfilePage';
import CocktailsList from '../components/Cocktails/CocktailsList';
import CoachPage from '../components/Coach/CoachPage';
import DrinksList from '../components/Drinks/DrinksList';
import DrinkPage from '../components/Drinks/DrinkPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<MainPageCocktail />} />
          <Route path="/cocktails" element={<CocktailsList />} />
          <Route path="/drinks" element={<DrinksList />} />
          <Route path="/drinks/drinkId" element={<DrinkPage />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="authorization" element={<AuthorizationPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="coach" element={<CoachPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
