import { FeedbackPair as FeedbackPairModel } from '../../models/FeedbackPair'
import FeedbackPair from '../FeedbackPair'

interface LineupListProps {
  feedbackPairs: FeedbackPairModel[]
  className?: string
}

const LineupList = ({ feedbackPairs, className }: LineupListProps) => {
  if (feedbackPairs.length === 0) {
    return <p className={className}>No feedback pairs given</p>
  }
  return (
    <ul className={`${className} text-xl`}>
      {feedbackPairs.map((pair) => (
        <li
          key={pair.giver.id}
          className='mt-4'
          aria-label={`${pair.giver.name} is giving feedback to ${pair.receiver.name}`}
        >
          <FeedbackPair pair={pair} />
        </li>
      ))}
    </ul>
  )
}

export default LineupList
