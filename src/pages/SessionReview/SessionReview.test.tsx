import { fireEvent, render, screen } from '../../test-utils'
import * as router from 'react-router'
import SessionReview from '.'
import { newTeammateBuilder } from '../../models/Teammate'
import { encodeFeedbackPairs, encodeTeammates } from '../../utils/encoding'
import * as randomPairs from '../../utils/feedback-pairs'
import { newFeedbackPairBuilder } from '../../models/FeedbackPair'

describe('<SessionReview />', () => {
  it('has a header that describes whats going on', () => {
    render(<SessionReview />)
    expect(screen.getByRole('heading', { name: 'Here\'s the lineup we came up with' })).toBeVisible()
  })

  it('has a button to create a new lineup', () => {
    render(<SessionReview />)
    expect(screen.getByRole('button', { name: 'Create a new lineup' })).toBeVisible()
  })

  it('has a button to start the feedback session', () => {
    render(<SessionReview />)
    expect(screen.getByRole('button', { name: 'Start Feedback Session' })).toBeVisible()
  })

  describe('on load', () => {
    beforeEach(() => {
      const teammates = [newTeammateBuilder('Teammate 1'), newTeammateBuilder('Teammate 2')]
      jest
        .spyOn(router, 'useParams')
        .mockImplementation(() => ({ token: encodeTeammates(teammates) }))
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('randomly generates feedback pairs using the given teammates', () => {
      render(<SessionReview />)
      expect(
        screen.getByRole('listitem', { name: 'Teammate 1 is giving feedback to Teammate 2' }),
      ).toBeVisible()
      expect(
        screen.getByRole('listitem', { name: 'Teammate 2 is giving feedback to Teammate 1' }),
      ).toBeVisible()
    })
  })

  describe('on creating a new lineup', () => {
    beforeEach(() => {
      const teammates = [
        newTeammateBuilder('Teammate 1'),
        newTeammateBuilder('Teammate 2'),
        newTeammateBuilder('Teammate 3'),
        newTeammateBuilder('Teammate 4'),
        newTeammateBuilder('Teammate 5'),
        newTeammateBuilder('Teammate 6'),
      ]
      jest
        .spyOn(router, 'useParams')
        .mockImplementation(() => ({ token: encodeTeammates(teammates) }))
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('randomly generates feedback pairs using the given teammates', async () => {
      render(<SessionReview />)

      const initialGeneratedPairs = screen
        .getAllByRole('listitem')
        .map((e) => e.getAttribute('aria-label'))

      const newPairsButton = screen.getByRole('button', { name: 'Create a new lineup' })
      fireEvent.click(newPairsButton)

      const newlyGeneratedPairs = (await screen.findAllByRole('listitem')).map((e) =>
        e.getAttribute('aria-label'),
      )

      expect(newlyGeneratedPairs).not.toEqual(initialGeneratedPairs)
    })
  })

  describe('when clicking on the start feedback session button', () => {
    const teammates = [newTeammateBuilder('Teammate 1'), newTeammateBuilder('Teammate 2')]
    const feedbackPairs = [
      newFeedbackPairBuilder(teammates[0], teammates[1]),
      newFeedbackPairBuilder(teammates[1], teammates[0]),
    ]
    const encodedFeedbackPairsToken = encodeFeedbackPairs(feedbackPairs)
    const navigationMock = jest.fn()

    beforeEach(() => {
      jest
        .spyOn(router, 'useParams')
        .mockImplementation(() => ({ token: encodeTeammates(teammates) }))
      jest.spyOn(randomPairs, 'generateRandomFeedbackPairs').mockImplementation(() => feedbackPairs)
      jest.spyOn(router, 'useNavigate').mockImplementation(() => navigationMock)
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('encodes the feedback pairs into the url', () => {
      render(<SessionReview />)

      const startFeedbackSessionButton = screen.getByRole('button', {
        name: 'Start Feedback Session',
      })
      fireEvent.click(startFeedbackSessionButton)

      expect(navigationMock).toHaveBeenCalledWith('/overview/' + encodedFeedbackPairsToken)
    })
  })
})
