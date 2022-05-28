import { Suspense,useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import {Loading} from './components/index';
import AppContext from "./AppContext";
import HomePage from './pages/HomePage';
import Educationpage from './pages/Education';
import WorkExperiencePage from './pages/WorkExperience';
import Thankyou from './pages/Thankyou';
import styles from './App.scss';

export default function App() {
  let [Education, setEducation] = useState([]);
  let [WorkExp, setWorkExperience] = useState([]);
  let [PersonalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    setEducation([])
    setWorkExperience([])
    setPersonalInfo({})
  }, []);

  let handleChangeInput = (e) => {
    setPersonalInfo(e);
  };
  let handleWorkExperienceChangeInput = (e) => {
    setWorkExperience(e);
  };
  let handleEducationChangeInput = (e) => {
    setEducation(e);
  };

  return (
    <AppContext.Provider
    value={{
      state: {
        WorkExp,
        Education,
        PersonalInfo,
      },function: {
        handlePersonalInfo: handleChangeInput,
        handleEducation:handleEducationChangeInput,
        handleWorkExp:handleWorkExperienceChangeInput
      },}}
    >
    <Router>
      <header>
        {/* <ThemeToggler /> */}
      </header>
      <main className={styles.main}>
        <Suspense fallback={<Loading />}>
          <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/Education" element={<Educationpage />} />
          
          <Route path="/WorkExperience" element={<WorkExperiencePage />} />
          <Route path="/Thankyou" element={<Thankyou />} />

            <Route path="*" element={<div>404</div>}>

            </Route>
          </Routes>
        </Suspense>
      </main>
    </Router>
    </AppContext.Provider>

  );
}
