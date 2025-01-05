import { useState, useEffect } from 'react';
import { CustomSwitch } from './CustomSwitch';
import { NASARatingScale, NASAComparison } from './NASAScales';
import { TLXScales, TLXScalesState, NasaStage } from '../data';


const NasaTLXForm = () => {
  const [isRaw, setIsRaw] = useState<boolean>(true);
  const [nasaStage, setNasaStage] = useState<NasaStage>(NasaStage.PART1);
  const [ratings, setRatings] = useState<TLXScalesState>(
    TLXScales.reduce((acc, scale) => {
      acc[scale.name] = scale.value;
      return acc;
    }, {} as TLXScalesState)
  );
  const [comparisons, setComparisons] = useState<{ [key: string]: string }>({});

  const handleRatingChange = (value: number, scale: string): void => {
    setRatings({ ...ratings, [scale]: value });
  };

  const handleComparisonChange = (comparisonValue: string, comparisonKey: string) => {
    setComparisons({ ...comparisons, [comparisonKey]: comparisonValue });
  };

  const handleSubmit = (): void => {
    if (!isRaw) setNasaStage(NasaStage.PART2);
  }

  useEffect(() => {
    console.log(handleComparisonChange);
  }, []);

  useEffect(() => {
    console.log(ratings);
  }, [ratings]);


  const renderRawSwitch = (v: boolean): string => {
    return v ? "NASA-TLX" : "NASA-RTLX";
  };


  return (
    <>
      <h2>Nasa TLX - Task Load Index</h2>
      <div className="survey-description">
        <p>
          The NASA Task Load Index (NASA-TLX) questionnaire is a subjective workload assessment 
          tool, which provides respondents with an overall score regarding their mental, physical, 
          and temporal demand, performance, effort, and frustration, in completing a task.
        </p>
        <div className="nasa-rtlx">
          <h3>NASA-RTLX</h3>
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

      <div className="survey-body">
        {nasaStage===NasaStage.PART1 ? (
          <>
            <h2>Scale Rating</h2>
            <p>
            Please <b className="survey-bold">carefully read each statement</b> and rate it on a scale of 0 to 20. Each statement 
            includes what a score of 0 or 20 means - <b className="survey-bold">please carefully read what each score means for 
            each statement.</b>
            </p>
            <form>
              {TLXScales.map((item) => (
                <NASARatingScale 
                  key={item.name}
                  item={item}
                  onChange={handleRatingChange}
                />
              ))}
              <div className="submit-container">
                <button className="submit-button" type="submit" onClick={handleSubmit}>{isRaw ? "Submit" : "Go To Part 2"}</button>
              </div>
            </form>
          </>
        ) : (
        <>
          <h2>Pairwise Comparison</h2>
          <p>
          Please <b className="survey-bold">carefully read each statement</b> and rate it on a scale of 0 to 20. Each statement 
          includes what a score of 0 or 20 means - <b className="survey-bold">please carefully read what each score means for 
          each statement.</b>
          </p>
          <form>
            { !isRaw && (
              <div className="comparison-container">
                {TLXScales.map((scale1, index1) =>
                  TLXScales.map((scale2, index2) => {
                    if (index1 < index2) {
                      return <NASAComparison key={`${scale1.name}-${scale2.name}`} scale1={scale1.name} scale2={scale2.name} />;
                    }
                    return null;
                  })
                )}
              </div>
            )}
            <div className="submit-container">
              <button className="submit-button" type="submit" onClick={handleSubmit}>{isRaw ? "Submit" : "Go To Part 2"}</button>
            </div>
          </form>
        </>
      )}

      </div>
    </>
  );
};

export default NasaTLXForm;
