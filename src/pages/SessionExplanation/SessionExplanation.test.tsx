import { fireEvent, render, screen } from '../../test-utils'
import * as router from 'react-router'
import SessionExplanation from '.'

describe('<SessionExplanation />', () => {
  it('renders a header to explain how a to run a feedback session', () => {
    render(<SessionExplanation />)
    expect(screen.getByRole('heading', { name: 'How to run a feedback session' })).toBeVisible()
  })

  it('renders the steps in running a feedback session', () => {
    render(<SessionExplanation />)
    expect(screen.getByText(/Step 1/)).toBeVisible()
    expect(screen.getByText(/Step 2/)).toBeVisible()
  })

  it('renders a button to generate feedback pairs', () => {
    render(<SessionExplanation />)
    expect(screen.getByRole('button', { name: 'Generate Feedback Pairs' })).toBeVisible()
  })

  describe('clicking on the generate feedback pairs button', () => {
    const navigate = jest.fn()
    beforeEach(() => {
      jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
      jest.spyOn(router, 'useParams').mockImplementation(() => ({ token: 'token' }))
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('forwards the url token to the review page', () => {
      render(<SessionExplanation />, '/explain/token')

      const generatePairsButton = screen.getByRole('button', { name: 'Generate Feedback Pairs' })
      fireEvent.click(generatePairsButton)

      expect(navigate).toHaveBeenCalledWith('/review/token')
    })
  })
})
