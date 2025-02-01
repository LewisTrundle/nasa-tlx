import { useState, useEffect } from 'react';
import { CustomSlider } from '../basic/CustomSlider';
import { TLXScalesTypes } from '../../data';
import { TLXScales } from '../../data';

interface NASARatingScaleProps {
  item: TLXScalesTypes;
  onChange: (value: number, scale: string) => void;
};

interface NASAStageBaseProps {
  title: string;
  description: React.ReactNode;
  onChange: (value: number, scale: string) => void
};


const NASARatingScale = ({ item, onChange }: NASARatingScaleProps) => (
  <div className="tlx-scale">
    <label>{item.label}</label>
    <p>{item.desc}</p>
    <div className="scale-rating">
      <CustomSlider
        defaultValue={item.value}
        onChange={(v: number) => onChange(v, item.name)}
      />
    </div>
  </div>
);


const shuffleArray = (array: any[]) => array.sort(() => Math.random() - 0.5);

const NASAComparison = () => {
  const [pairs, setPairs] = useState<{ first: TLXScalesTypes; second: TLXScalesTypes }[]>([]);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [scales, setScales] = useState([...TLXScales]);

  useEffect(() => {
    const generatePairs = () => {
      const shuffled = shuffleArray([...TLXScales]);
      const newPairs = [];
      for (let i = 0; i < shuffled.length; i++) {
        for (let j = i + 1; j < shuffled.length; j++) {
          newPairs.push({ first: shuffled[i], second: shuffled[j] });
        }
      }
      setPairs(shuffleArray(newPairs)); // Shuffle the pairs
    };

    generatePairs();
  }, []);


  const handleSelection = (selected: "first" | "second") => {
    const updatedScales = scales.map(scale => 
      scale.name === pairs[currentPairIndex][selected].name 
        ? { ...scale, tally: scale.tally + 1 } 
        : scale
    );
    setScales(updatedScales);
    
    if (currentPairIndex < pairs.length - 1) {
      setCurrentPairIndex(currentPairIndex + 1);
    } else {
      console.log("Comparison complete", updatedScales);
      // Handle end of comparisons (e.g., navigate to results)
    }
  };

  if (pairs.length === 0) return <p>Loading comparisons...</p>;

  return (
    <div>
      <h2>Which factor was more important?</h2>
      <button onClick={() => handleSelection("first")}>{pairs[currentPairIndex].first.label}</button>
      <button onClick={() => handleSelection("second")}>{pairs[currentPairIndex].second.label}</button>
      <p>{currentPairIndex + 1} / {pairs.length} comparisons completed</p>
    </div>
  );
};


const NASAStageBase = ({ title, description, onChange }: NASAStageBaseProps) => {
  return(
    <>
      <h2>{title}</h2>
      <p>{description}</p>
      <form>
        {TLXScales.map((item) => (
          <NASARatingScale 
            key={item.name}
            item={item}
            onChange={onChange}
          />
        ))}
      </form>
    </>
  )
}

export { NASARatingScale, NASAComparison, NASAStageBase };