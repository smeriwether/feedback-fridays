import { useParams } from 'react-router-dom'
import LineupList from '../../components/LineupList'
import { decodeFeedbackPairs } from '../../utils/encoding'
import { generateFeedbackRounds } from '../../utils/feedback-pairs'

const SessionOverview = () => {
  const { token } = useParams()
  const feedbackPairs = decodeFeedbackPairs(token)
  const feedbackRounds = generateFeedbackRounds(feedbackPairs)

  return (
    <div>
      <header>
        <h1 className='text-3xl font-bold'>Start feedbacking!</h1>
      </header>

      <div className='mt-8'>
        <p className='text-xl font-bold'>Each pair has 3 minutes to delivery feedback</p>
      </div>

      <section className='mt-8'>
        <header>
          <h2 className='text-2xl'>How to split up the team</h2>
          <p className='text-gray-700 text-md'>
            If you&apos;re using Zoom, for each round put each pair in a breakout room. A few
            minutes later bring everyone back and do it again.
          </p>
        </header>

        {feedbackRounds.length > 0 && (
          <ul className='mt-6'>
            {feedbackRounds.map((round, idxR) => (
              <li className='mt-6' key={idxR} aria-label={`Round ${idxR + 1}`}>
                <h3 className='text-xl font-bold'>Round {idxR + 1}</h3>
                <LineupList feedbackPairs={round.feedbackPairs} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default SessionOverview
