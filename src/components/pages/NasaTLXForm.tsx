import { useState, useEffect } from 'react';
import { CustomSwitch } from '../basic/CustomSwitch';
import { NASAComparison, NASAStageBase } from '../advanced/NASAScales';
import { TLXScales, TLXScalesState, NasaStage } from '../../data';


const STAGES: string[] = ["INTRO", "PART1", "PART2", "COMPLETE"];


const NasaTLXForm = () => {
  const [isRaw, setIsRaw] = useState<boolean>(false);
  const [stageIndex, setStageIndex] = useState<number>(0);
  const [nasaStage, setNasaStage] = useState<NasaStage | null>(null);
  const [ratings, setRatings] = useState<TLXScalesState>(
    TLXScales.reduce((acc, scale) => {
      acc[scale.name] = scale.value;
      return acc;
    }, {} as TLXScalesState)
  );

  const handleRatingChange = (value: number, scale: string): void => {
    setRatings({ ...ratings, [scale]: value });
  };

  const handleSubmit = (back: boolean): void => {
    switch(nasaStage) {
      case null:
        setNasaStage(NasaStage.PART1);
        break;
      case NasaStage.PART1:
        setNasaStage(back ? null : NasaStage.PART2);
        break;
      case NasaStage.PART2:
        setNasaStage(back ? NasaStage.PART1 : NasaStage.COMPLETE);
        break;
    }
  };
  const submitButtonText = (): string => {
    switch(nasaStage) {
      case null:
        return "Start"
      case NasaStage.PART1:
        return isRaw ? "Finish" : "Next"
      case NasaStage.PART2:
        return "Finish"
      default:
          return "Finish"
    }
  }


  useEffect(() => {
    console.log(ratings);
  }, [ratings]);


  const renderRawSwitch = (v: boolean): string => {
    return v ? "NASA-RTLX" : "NASA-TLX";
  };




  return (
    <>
      {nasaStage===null && (
        <div className="survey-description">
          <div className="nasa-rtlx">
            <h2>NASA-RTLX</h2>
            <p>Unlike the weighted version, the Raw NASA-TLX does not include pairwise comparisons to determine the relative importance of these dimensions. This makes it quicker and simpler to administer.</p>
            <CustomSwitch
              checked={isRaw}
              onToggle={setIsRaw}
              uncheckedIcon={false}
              checkedIcon={false}
              height={20}
              width={60}
              renderValue={renderRawSwitch}
            />
          </div>
        </div>
      )}

      <div className="survey-body">
        {nasaStage===NasaStage.PART1 && (
            <NASAStageBase
              title={"Scale Rating"}
              description={<>Please <b className="survey-bold">carefully read each statement</b> and rate it on a scale of 0 to 20. Each statement 
                includes what a score of 0 or 20 means - <b className="survey-bold">please carefully read what each score means for 
                each statement.</b></>}
              onChange={handleRatingChange}
            />
        )}
        {nasaStage===NasaStage.PART2 && (
        <>
          <h2>Pairwise Comparison</h2>
          <p>
            For each of the following 15 comparisons, please click on the attribute that you felt was the more important contributor to workload for the task.
          </p>
          <NASAComparison />
        </>
      )}

        <div className="submit-container">
          {(nasaStage===NasaStage.PART1 || nasaStage===NasaStage.PART2) && <button className="submit-button" onClick={() => handleSubmit(true)}>Back</button>}
          <button className="submit-button" onClick={() => handleSubmit(false)}>{submitButtonText()}</button>
        </div>
      </div>
    </>
  );
};

export default NasaTLXForm;
