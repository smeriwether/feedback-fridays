import { useNavigate, useParams } from 'react-router-dom'
import PrimaryButton from '../../components/PrimaryButton'

const SessionExplanation = () => {
  const params = useParams()
  const navigate = useNavigate()

  const generateFeedbackPairs = () => {
    navigate('/review/' + params.token)
  }

  return (
    <section>
      <header>
        <h1 className='text-3xl font-bold'>How to run a feedback session</h1>
        <p className='text-gray-700'>
          Feedback Friday makes running an effective feedback session easy.
        </p>
      </header>

      <ol className='mt-12'>
        <li className='mt-8'>
          <p className='font-bold text-xl'>Step 1: Feedback Friday creates random feedback pairs</p>
          <p className='mt-2 text-gray-700'>
            Feedback Friday will randomly group teamamtes together, one person to give the feedback
            and one person to receive it. A teammate will give feedback to a different person than
            they receive it from to increase face-time with whole team.
          </p>
        </li>

        <li className='mt-8'>
          <p className='font-bold text-xl'>Step 2: You confirm the feedback pairs</p>
          <p className='mt-2 text-gray-700'>
            Before the feedback session starts you can confirm the, or create new, feedback pairs.
            You should review the pairs to make sure they make sense for your team.
          </p>
        </li>

        <li className='mt-8'>
          <p className='font-bold text-xl'>Step 3: Give everyone 5 minutes to think of feedback</p>
          <p className='mt-2 text-gray-700'>
            Encourage everyone to think of 1 piece of positive feedback and 1 piece of constructive
            feedback.
          </p>
        </li>

        <li className='mt-8'>
          <p className='font-bold text-xl'>
            Step 4: Each pair has 3 minutes to privately give feedback
          </p>
          <p className='mt-2 text-gray-700'>
            Use Zoom breakout rooms (or equivalent) to allow each pair to privately give and receive
            feedback.
          </p>
        </li>

        <li className='mt-8'>
          <p className='font-bold text-xl'>Step 5: Repeat until all pairs have given feedback</p>
          <p className='mt-2 text-gray-700'>
            Feedback Friday will help you effeciently create breakout rooms to limit the number of
            cycles needed.
          </p>
        </li>

        <li className='mt-6'>
          <p className='font-bold text-xl'>
            Step 6: Savor the moment of having a higher performing team
          </p>
          <p className='mt-2 text-gray-700'>
            The more feedback your team gives the higher performing it&apos;ll become. Feedback is
            an essential part of any team.
          </p>
        </li>
      </ol>

      <PrimaryButton
        text='Generate Feedback Pairs'
        className='mt-8'
        onClick={generateFeedbackPairs}
      />
    </section>
  )
}

export default SessionExplanation
