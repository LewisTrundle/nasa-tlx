import { TLXScalesTypes, TLXScalesState, TLXScalesTally, NasaStage, NasaOptions } from "./constants"


enum Surveys {
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
type SurveyDescriptionNASA = {
  name: string;
  description: string;
  value: NasaOptions;
};
const nasaOptionsList: SurveyDescriptionNASA[] = [
  { name: "Complete Survey", description: "Complete the NASA-TLX survey on this device or send a link to a participant", value: NasaOptions.COMPLETE },
  { name: "Embed Survey", description: "Get a link to embed the NASA-TLX survey in your website", value: NasaOptions.EMBED },
  { name: "See Results", description: "See and analyse results of previous studies.", value: NasaOptions.RESULTS },
];

const TLXScales: TLXScalesTypes[] = [
  { 
    label: 'Mental Demand', 
    name: 'mentalDemand', 
    desc: "How much mental and perceptual activity was required?", 
    low: "It was very mentally easy", 
    high: "It was very mentally challenging", 
    value: 50,
    tally: 0
  },
  { 
    label: 'Physical Demand', 
    name: 'physicalDemand', 
    desc: "How much physical activity was required?", 
    low: "It was very physically easy", 
    high: "It was very physically challenging", 
    value: 50,
    tally: 0
  },
  { 
    label: 'Temporal Demand', 
    name: 'temporalDemand', 
    desc: "How much time pressure did you feel?", 
    low: "My pace was slow and leisurely",
    high: "My pace felt rapid and frantic",
    value: 50,
    tally: 0
  },
  { 
    label: 'Performance', 
    name: 'performance', 
    desc: "How successful do you think you were?",
    low: "I was very satisfied with my performance",
    high: "I was very unsatisfied with my performance",
    value: 50,
    tally: 0
  },
  { 
    label: 'Effort', 
    name: 'effort', 
    desc: "How hard did you have to work (mentally and physically) to accomplish your level of performance?",
    low: "It was not very hard",
    high: "It was very hard",
    value: 50,
    tally: 0
  },
  { 
    label: 'Frustration Level', 
    name: 'frustrationLevel', 
    desc: "How irritated, stressed, or annoyed, did you feel?", 
    low: "I felt very calm and relaxed",
    high: "I felt very stressed and irritated",
    value: 50,
    tally: 0
  }
];


export type { 
  SurveyDescription,
  TLXScalesTypes, TLXScalesState, TLXScalesTally
}
export { 
  Surveys, surveyList,
  NasaStage, TLXScales, NasaOptions, nasaOptionsList
}