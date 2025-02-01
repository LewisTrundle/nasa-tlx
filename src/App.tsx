import { useState } from 'react';
import { BackButton, NasaTLXForm, FormOptions } from './components';
import { Surveys, surveyList, NasaOptions, nasaOptionsList } from './data'
import './styles/index.css';


function App() {
  const [surveyType, setSurveyType] = useState<Surveys | null>(null);
  const [subOption, setSubOption] = useState<NasaOptions | null>(null);


  return (
    <>

      <header className="app-header">
        {surveyType === null && <h1>Survey Master</h1>}
        {surveyType === Surveys.NASA && <h1>Nasa TLX - Task Load Index</h1>}
        {surveyType === Surveys.SUS && <h1>SUS Survey</h1>}
        {surveyType === Surveys.CUSTOM && <h1>Custom Survey</h1>}
      </header>

      <main className="app-body">
        { surveyType === null ? (
          <FormOptions
            optionsList={surveyList}
            onClick={setSurveyType}
          />
        ) : subOption === null ? (
          <>
            {surveyType === Surveys.NASA && (
              <FormOptions
                descriptionText="The NASA Task Load Index (NASA-TLX) questionnaire is a subjective workload assessment tool, 
                which provides respondents with an overall score regarding their mental, physical, and temporal demand, performance, 
                effort, and frustration, in completing a task."
                optionsList={nasaOptionsList}
                onClick={setSubOption}
              />
            )}
            <BackButton onClick={() => setSurveyType(null)} />
          </>
        ) : (
          <div className="survey-content">
            {subOption === NasaOptions.COMPLETE && <NasaTLXForm />}
            <BackButton onClick={() => setSubOption(null)} />
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
