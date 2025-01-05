import { TLXScalesTypes, TLXScalesState } from "./types";

enum Surveys {
  "NONE",
  "NASA",
  "SUS",
  "CUSTOM"
};

enum NasaStage {
  "PART1",
  "PART2"
}


const TLXScales: TLXScalesTypes[] = [
  { 
    label: 'Mental Demand', 
    name: 'mentalDemand', 
    desc: "How much mental and perceptual activity was required?", 
    low: "It was very mentally easy", 
    high: "It was very mentally challenging", 
    value: 0 
  },
  { 
    label: 'Physical Demand', 
    name: 'physicalDemand', 
    desc: "How much physical activity was required?", 
    low: "It was very physically easy", 
    high: "It was very physically challenging", 
    value: 0 
  },
  { 
    label: 'Temporal Demand', 
    name: 'temporalDemand', 
    desc: "How much time pressure did you feel?", 
    low: "My pace was slow and leisurely",
    high: "My pace felt rapid and frantic",
    value: 0 
  },
  { 
    label: 'Performance', 
    name: 'performance', 
    desc: "How successful do you think you were?",
    low: "I was very satisfied with my performance",
    high: "I was very unsatisfied with my performance",
    value: 0 
  },
  { 
    label: 'Effort', 
    name: 'effort', 
    desc: "How hard did you have to work (mentally and physically) to accomplish your level of performance?",
    low: "It was not very hard",
    high: "It was very hard",
    value: 0 
  },
  { 
    label: 'Frustration Level', 
    name: 'frustrationLevel', 
    desc: "How irritated, stressed, or annoyed, did you feel?", 
    low: "I felt very calm and relaxed",
    high: "I felt very stressed and irritated",
    value: 0 
  }
];

export { Surveys, TLXScales, NasaStage };
export type { TLXScalesState };
