import { useState } from 'react';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import NasaTLXForm from './components/NasaTLXForm';
import './styles/index.css';
import './data';
import { Surveys } from './data';
import { BackButton } from './components/BackButton';

function App() {
  const [surveyType, setSurveyType] = useState<Surveys>(Surveys.NONE);

  const surveyList: {
    name: string;
    description: string;
    value: Surveys;
  }[] = [
    { name: "NASA-TLX", description: "Task Load Index Survey", value: Surveys.NASA },
    { name: "SUS", description: "System Usability Scale Survey", value: Surveys.SUS },
    { name: "Custom", description: "Embed your own survey", value: Surveys.CUSTOM },
  ];


  return (
    <>

      <header className="app-header">
        <h1>Survey Master</h1>
      </header>

      <main className="app-body">
        {surveyType === Surveys.NONE ? (
          <div className="survey-grid">
            {surveyList.map((survey) => (
              <div
                key={survey.value}
                className="survey-card"
                onClick={() => setSurveyType(survey.value)}
              >
                <h2>{survey.name}</h2>
                <p>{survey.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="survey-content">
            {surveyType === Surveys.NASA && <NasaTLXForm />}
            {surveyType === Surveys.SUS && <div>SUS Survey Coming Soon!</div>}
            {surveyType === Surveys.CUSTOM && <div>Embed your survey here.</div>}
            <BackButton
              onClick={() => setSurveyType(Surveys.NONE)}
            />
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>© 2024 Survey Master. All rights reserved.</p>
      </footer>

    </>
  )
}

export default App
