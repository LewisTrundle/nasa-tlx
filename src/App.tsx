import { useState } from 'react';
import { BackButton, NasaTLXForm } from './components';
import { Surveys, surveyList } from './data'
import './styles/index.css';


function App() {
  const [surveyType, setSurveyType] = useState<Surveys>(Surveys.NONE);

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
