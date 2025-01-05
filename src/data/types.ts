type TLXScalesTypes = {
  label: string;
  name: string;
  desc: string;
  low: string;
  high: string;
  value: number;
};

type TLXScalesState = {
  [key in TLXScalesTypes['name']]: number;
};

export type { TLXScalesTypes, TLXScalesState };