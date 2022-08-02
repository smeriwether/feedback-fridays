import { fireEvent, render, screen } from '../../test-utils'
import * as router from 'react-router'
import Home from './index'
import { encodeTeammates } from '../../utils/encoding'
import { newTeammateBuilder } from '../../models/Teammate'

describe('<Home />', () => {
  it('renders a header that introduces the app', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { name: 'Feedback Friday!' })).toBeVisible()
  })

  it('renders a form to add teammates who are participating', () => {
    render(<Home />)

    expect(screen.getByRole('heading', { name: "Who's on your team?" })).toBeVisible()
    expect(screen.getByRole('form', { name: 'Participating teammates form' })).toBeVisible()
  })

  it('by default renders 2 inputs to add 2 participating teammates', () => {
    render(<Home />)

    const participatingTeammateInputs = screen.getAllByRole('textbox', { name: 'Teammate name' })
    expect(participatingTeammateInputs.length).toEqual(2)
  })

  it('has a button to add another teammate to the list of participating teammates', () => {
    render(<Home />)

    expect(screen.getByRole('button', { name: 'Add another teammate' })).toBeVisible()
  })

  describe('when clicking on the button to add another teammate', () => {
    it('adds another input to list a participating teammate', () => {
      render(<Home />)

      const addTeammateButton = screen.getByRole('button', { name: 'Add another teammate' })
      fireEvent.click(addTeammateButton)

      const participatingTeammateInputs = screen.getAllByRole('textbox', { name: 'Teammate name' })
      expect(participatingTeammateInputs.length).toEqual(3)
    })
  })

  it('has a button to remove any teammate from the list of participating teammates', () => {
    render(<Home />)
    const participatingTeammateInputs = screen.getAllByRole('textbox', { name: 'Teammate name' })
    fireEvent.change(participatingTeammateInputs[0], { target: { value: 'Teammate 1' } })

    const removeTeammateButton = screen.getByRole('button', { name: 'Remove teammate 2' })
    fireEvent.click(removeTeammateButton)

    expect(screen.getByRole('textbox', { name: 'Teammate name' })).toHaveDisplayValue('Teammate 1')
  })

  it('has a button to start the feedback session', () => {
    render(<Home />)

    expect(screen.getByRole('button', { name: 'Start Feedback Session' })).toBeVisible()
  })

  describe('clicking the start feedback button', () => {
    const navigate = jest.fn()
    beforeEach(() => {
      jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    it('encodes the teammates and appends it to the url', () => {
      render(<Home />)
      const encodedTeammateString = encodeTeammates([
        newTeammateBuilder('Teammate 1'),
        newTeammateBuilder('Teammate 2'),
      ])
      const participatingTeammateInputs = screen.getAllByRole('textbox', { name: 'Teammate name' })
      fireEvent.change(participatingTeammateInputs[0], { target: { value: 'Teammate 1' } })
      fireEvent.change(participatingTeammateInputs[1], { target: { value: 'Teammate 2' } })

      const startFeedbackButton = screen.getByRole('button', { name: 'Start Feedback Session' })
      fireEvent.click(startFeedbackButton)

      expect(navigate).toHaveBeenCalledWith('/explain/' + encodedTeammateString)
    })

    it('only encodes teammates with names', () => {
      render(<Home />)
      const encodedTeammateString = encodeTeammates([newTeammateBuilder('Teammate 1')])
      const participatingTeammateInputs = screen.getAllByRole('textbox', { name: 'Teammate name' })
      fireEvent.change(participatingTeammateInputs[0], { target: { value: 'Teammate 1' } })

      const startFeedbackButton = screen.getByRole('button', { name: 'Start Feedback Session' })
      fireEvent.click(startFeedbackButton)

      expect(navigate).toHaveBeenCalledWith('/explain/' + encodedTeammateString)
    })
  })
})
