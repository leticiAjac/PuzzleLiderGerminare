import * as React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

import LevelUmPage from './Pages/Level1'
import LevelDoisPage from './Pages/Level2'
import LevelTresPage from './Pages/Level3';
import BeginningPage from './Pages/Beginning'
import FirstVideoPage from './Pages/FirstVideo'
import IntroLevel1Page from './Pages/IntroLevel1'
import IntroLevel2Page from './Pages/IntroLevel2'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BeginningPage />} />
          <Route path='/FirstVideo' element={<FirstVideoPage />}/>
          <Route path='/IntroLevel1' element={<IntroLevel1Page />}/>
          <Route path='/IntroLevel2' element={<IntroLevel2Page />}/>
          <Route path='/Level1' element={<LevelUmPage />}/>
          <Route path='/Level2' element={<LevelDoisPage />}/>
          <Route path='/Level3' element={<LevelTresPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
