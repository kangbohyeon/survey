import { Route, Routes } from 'react-router-dom';
import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';
import styles from './assets/css/App.module.css';

function App() {
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.box}`}>
        <Routes>
          <Route path='/done' element={<CompletionPage />} />
          <Route path='/survey/:surveyId' element={<SurveyPage />}>
            <Route path=':step' element={<SurveyPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
