interface FormOptionsProps<T extends { name: string; description: string; value: V }, V> {
  descriptionText?: React.ReactNode;
  optionsList: T[];
  onClick: React.Dispatch<React.SetStateAction<V>>;
}


const FormOptions = <T extends { name: string; description: string; value: V }, V>
({ 
  optionsList, 
  onClick, 
  descriptionText 
}: FormOptionsProps<T, V>) => {
  return (
    <>
    { descriptionText && <div className="form-description">{descriptionText}</div>}
      <div className="survey-grid">
        {optionsList.map((item) => (
          <div
            key={item.name}
            className="survey-card"
            onClick={() => onClick(item.value)}
          >
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export { FormOptions }