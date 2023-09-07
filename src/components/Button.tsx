type Props = {
  label: string
  onClick: () => void
  variant: 'primary' | 'secondary'
}

export const Button = ({ label, onClick }: Props) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
