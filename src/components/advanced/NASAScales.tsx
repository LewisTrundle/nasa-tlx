import { CustomSlider } from '../basic/CustomSlider';
import { TLXScalesTypes } from '../../data';

interface NASARatingScaleProps {
  item: TLXScalesTypes;
  onChange: (value: number, scale: string) => void;
};

interface NASAComparisonProps {
  scale1: string;
  scale2: string;
}

const NASARatingScale: React.FC<NASARatingScaleProps> = ({ item, onChange }: NASARatingScaleProps) => (
  <div className="tlx-scale">
    <label>{item.label}</label>
    <p>{item.desc}</p>
    <div className="scale-rating">
      <CustomSlider
        onChange={(v: number) => onChange(v, item.name)}
      />
    </div>
  </div>
);

const NASAComparison: React.FC<{ scale1: string, scale2: string }> = ({ scale1, scale2 }: NASAComparisonProps) => {
  console.log(scale1, scale2);
  return (
    <div className="comparison-question">
      <label>
      </label>
      <label>
      </label>
    </div>
  );
};

export { NASARatingScale, NASAComparison };