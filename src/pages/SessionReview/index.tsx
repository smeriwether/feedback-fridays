import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import LineupList from '../../components/LineupList'
import PrimaryButton from '../../components/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton'
import { FeedbackPair } from '../../models/FeedbackPair'
import { Teammate } from '../../models/Teammate'
import { decodeTeammates, encodeFeedbackPairs } from '../../utils/encoding'
import { generateRandomFeedbackPairs } from '../../utils/feedback-pairs'

const SessionReview = () => {
  const navigate = useNavigate()
  const { token } = useParams()

  const [feedbackPairs, setFeedbackPairs] = useState<FeedbackPair[]>([])
  const [teammates, setTeammates] = useState<Teammate[]>([])

  const createRandomFeedbackPairs = (teammates: Teammate[]) => {
    setFeedbackPairs(generateRandomFeedbackPairs(teammates))
  }

  useEffect(() => {
    setTeammates(decodeTeammates(token))
  }, [token])

  useEffect(() => {
    createRandomFeedbackPairs(teammates)
  }, [teammates])

  const startFeedbackSession = () => {
    navigate('/overview/' + encodeFeedbackPairs(feedbackPairs))
  }

  return (
    <div>
      <header>
        <h1 className='text-3xl font-bold'>Here&apos;s the lineup we came up with</h1>
        <p className='text-gray-600 mt-1'>What do you think?</p>
      </header>

      <section className='mt-12'>
        <header>
          <h2 className='text-2xl font-bold'>Today&apos;s lineup</h2>
          <p className='text-gray-600 mt-1 text-sm'>
            In case you need help: Foo is giving feedback to Bar.
          </p>
        </header>

        <LineupList feedbackPairs={feedbackPairs} className='mt-4' />

        <SecondaryButton
          text='Create a new lineup'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4 mr-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
              />
            </svg>
          }
          onClick={() => createRandomFeedbackPairs(teammates)}
          className='mt-5'
        />

        <PrimaryButton
          text='Start Feedback Session'
          className='mt-8'
          onClick={startFeedbackSession}
        />
      </section>
    </div>
  )
}

export default SessionReview
