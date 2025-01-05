
interface BackButtonProps {
  onClick: () => void
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button className="back-button" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
      <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
      <span>Back</span>
    </button>
  )
}

export { BackButton }