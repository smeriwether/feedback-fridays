import { MouseEventHandler, ReactElement } from 'react'

interface SecondaryButtonProps {
  text: string
  icon?: ReactElement
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
}

const SecondaryButton = ({
  text,
  icon,
  onClick,
  className,
  ...htmlProps
}: SecondaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${
        icon && 'flex items-center'
      } px-5 py-2 rounded-md border border-indigo-100 shadow-sm text-indigo-800 hover:bg-indigo-100 hover:text-indigo-800`}
      {...htmlProps}
    >
      {icon && icon}
      <span>{text}</span>
    </button>
  )
}

export default SecondaryButton
