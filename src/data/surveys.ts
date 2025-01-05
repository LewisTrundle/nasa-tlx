enum Surveys {
  "NONE",
  "NASA",
  "SUS",
  "CUSTOM"
};

type SurveyDescription = {
  name: string;
  description: string;
  value: Surveys;
};

const surveyList: SurveyDescription[] = [
  { name: "NASA-TLX", description: "Task Load Index Survey", value: Surveys.NASA },
  { name: "SUS", description: "System Usability Scale Survey", value: Surveys.SUS },
  { name: "Custom", description: "Embed your own survey", value: Surveys.CUSTOM },
];

export type { SurveyDescription }
export { Surveys, surveyList }
