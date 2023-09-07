import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.scss';
import HomePage from './Home/HomePage';
import NotFoundPage from './NotFound/NotFoundPage';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getInternationalizationFile } from './json-utils/json-reader';

// init internationalization
i18n
  .use(initReactI18next)
  .init(getInternationalizationFile());


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='*' Component={NotFoundPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
