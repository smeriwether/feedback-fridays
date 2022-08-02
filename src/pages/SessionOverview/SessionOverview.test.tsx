import { render, screen, within } from '../../test-utils'
import * as feedbackRounds from '../../utils/feedback-pairs'
import SessionOverview from '.'
import { newFeedbackRound } from '../../models/FeedbackRotation'
import { newFeedbackPairBuilder } from '../../models/FeedbackPair'
import { newTeammateBuilder } from '../../models/Teammate'

describe('<SessionOverview />', () => {
  it('renders a header explaining that the feedbacking should start', () => {
    render(<SessionOverview />)
    expect(screen.getByRole('heading', { name: 'Start feedbacking!' })).toBeVisible()
  })

  it('renders a header explaining how to breakdown the feedback rotations', () => {
    render(<SessionOverview />)
    expect(screen.getByRole('heading', { name: 'How to split up the team' })).toBeVisible()
  })

  describe('generating feedback rounds', () => {
    const mockFeedbackRounds = [
      newFeedbackRound([
        newFeedbackPairBuilder(newTeammateBuilder('Teammate 1'), newTeammateBuilder('Teammate 2')),
      ]),
      newFeedbackRound([
        newFeedbackPairBuilder(newTeammateBuilder('Teammate 2'), newTeammateBuilder('Teammate 3')),
      ]),
      newFeedbackRound([
        newFeedbackPairBuilder(newTeammateBuilder('Teammate 3'), newTeammateBuilder('Teammate 1')),
      ]),
    ]

    beforeEach(() => {
      jest
        .spyOn(feedbackRounds, 'generateFeedbackRounds')
        .mockImplementation(() => mockFeedbackRounds)
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('displays the list of headers that announce each feedback rounds', () => {
      render(<SessionOverview />)

      expect(screen.getByRole('heading', { name: 'Round 1' })).toBeVisible()
      expect(screen.getByRole('heading', { name: 'Round 2' })).toBeVisible()
      expect(screen.getByRole('heading', { name: 'Round 3' })).toBeVisible()
    })

    it('displays the list of feedback pairs within each round', () => {
      render(<SessionOverview />)

      expect(
        within(screen.getByRole('listitem', { name: 'Round 1' })).getByRole('listitem', {
          name: 'Teammate 1 is giving feedback to Teammate 2',
        }),
      ).toBeVisible()
      expect(
        within(screen.getByRole('listitem', { name: 'Round 2' })).getByRole('listitem', {
          name: 'Teammate 2 is giving feedback to Teammate 3',
        }),
      ).toBeVisible()
      expect(
        within(screen.getByRole('listitem', { name: 'Round 3' })).getByRole('listitem', {
          name: 'Teammate 3 is giving feedback to Teammate 1',
        }),
      ).toBeVisible()
    })
  })
})
