import { MouseEventHandler } from 'react'

interface PrimaryButtonProps {
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

const PrimaryButton = ({ text, onClick, className, ...htmlProps }: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} w-full py-2 rounded-md bg-indigo-700 text-indigo-50 cursor-pointer shadow-sm hover:bg-indigo-800`}
      {...htmlProps}
    >
      {text}
    </button>
  )
}

export default PrimaryButton
