import { render, screen } from '../../test-utils'
import LineupList from '.'
import { newTeammateBuilder } from '../../models/Teammate'
import { newFeedbackPairBuilder } from '../../models/FeedbackPair'

const mockFeedbackPairs = [
  newFeedbackPairBuilder(newTeammateBuilder('Teammate 1'), newTeammateBuilder('Teammate 2')),
  newFeedbackPairBuilder(newTeammateBuilder('Teammate 2'), newTeammateBuilder('Teammate 1')),
]

describe('<LineupList />', () => {
  it('renders an error message when no feedback pairs are given', () => {
    render(<LineupList feedbackPairs={[]} />)
    expect(screen.getByText('No feedback pairs given')).toBeVisible()
  })

  it('renders a list of feedback pairs', () => {
    render(<LineupList feedbackPairs={mockFeedbackPairs} />)

    expect(
      screen.getByRole('listitem', { name: 'Teammate 1 is giving feedback to Teammate 2' }),
    ).toBeVisible()
    expect(
      screen.getByRole('listitem', { name: 'Teammate 2 is giving feedback to Teammate 1' }),
    ).toBeVisible()
  })
})
