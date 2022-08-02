import { FeedbackPair as FeedbackPairModel } from '../../models/FeedbackPair'

interface FeedbackPairProps {
  pair: FeedbackPairModel
  className?: string
}

const FeedbackPair = ({ pair, className }: FeedbackPairProps) => {
  return (
    <div className={className}>
      <span>{pair.giver.name}</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='inline ml-2 h-5 w-5'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M17 8l4 4m0 0l-4 4m4-4H3'
        />
      </svg>
      <span className='pl-2'>{pair.receiver.name}</span>
    </div>
  )
}

export default FeedbackPair
