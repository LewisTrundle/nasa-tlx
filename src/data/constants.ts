enum NasaStage {
  "PART1",
  "PART2",
  "COMPLETE"
};

enum NasaOptions {
  "COMPLETE",
  "EMBED",
  "RESULTS"
};

type TLXScalesTypes = {
  label: string;
  name: string;
  desc: string;
  low: string;
  high: string;
  value: number;
  tally: number;
};

type TLXScalesState = {
  [key in TLXScalesTypes['name']]: number;
};
type TLXScalesTally = {
  [key in TLXScalesTypes['tally']]: number;
};



export type { TLXScalesTypes, TLXScalesState, TLXScalesTally };
export { NasaStage, NasaOptions }