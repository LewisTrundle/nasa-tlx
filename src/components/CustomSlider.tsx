import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

interface CustomSliderProps {
  onChange?: (value: number) => void;
}


export const CustomSlider = ( { onChange }: CustomSliderProps) => {
  const [value, setValue] = useState<number>(50);
  const sliderHeight: number = 20;
  const handleHeight: number = sliderHeight;

  const marks: Record<number, JSX.Element|number> = {};
  for (let i = 0; i <= 100; i += 5) {
    marks[i] = i === 0 || i === 100 ? <strong>{i}</strong> : i;
  }

  const handleSliderChange = (v: number): void => {
    setValue(v);
    if(onChange) onChange(v);
  };


  return (
    <div style={{ width: '100%' }}>
        <Slider
          min={0}
          max={100}
          defaultValue={value}
          step={5}
          marks={marks}
          onChangeComplete={(v) => handleSliderChange(Number(v))}
          dotStyle={{
            border: 'none',
            background: 'black',
            height: sliderHeight,
            width: 1.5,
            marginBottom: -14,
          }}
          activeDotStyle={{ 
            border: 'none',
            background: 'white',
            height: sliderHeight,
            width: 1.5,
            marginBottom: -14,
          }}
          styles={{ 
            track: { 
              background: 'linear-gradient(to right, red, yellow)', 
              height: sliderHeight,
              borderRadius: 0
            },
            rail: { 
              background: 'linear-gradient(to right, gray, black)', 
              height: sliderHeight,
              borderRadius: 0
            },
            handle: {
              borderColor: "red",
              backgroundColor: "red",
              height: handleHeight,
              width: handleHeight,
              marginTop: (sliderHeight - handleHeight)/2
            }
          }}
        />
        <p style={{ marginTop: 20 }}><strong>{value}</strong></p>
    </div>
  )
};