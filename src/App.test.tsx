import React from 'react'
import { fireEvent, render, screen } from './test-utils'
import App from './App'
import { encodeTeammates } from './utils/encoding'
import { newTeammateBuilder } from './models/Teammate'

const encodedTeammatesToken = encodeTeammates([
  newTeammateBuilder('Name 1'),
  newTeammateBuilder('Name 2'),
])

describe('<App />', () => {
  it('renders the Home page by default', () => {
    render(<App />)
    expect(screen.getByText(/Feedback Friday!/i)).toBeVisible()
  })

  it('renders a button to start over', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Start over' })).toBeVisible()
  })

  describe('clicking on the start over button', () => {
    it('navigates the user back to the home page', () => {
      render(<App />, '/explain')

      const startOverButton = screen.getByRole('button', { name: 'Start over' })
      fireEvent.click(startOverButton)

      expect(screen.getByText(/Feedback Friday!/i)).toBeVisible()
    })
  })

  describe('clicking on the start feedback session button on the home page', () => {
    it('navigates the user to the explination page', () => {
      render(<App />)

      const startSessionButton = screen.getByRole('button', { name: 'Start Feedback Session' })
      fireEvent.click(startSessionButton)

      expect(screen.getByRole('heading', { name: 'How to run a feedback session' })).toBeVisible()
    })
  })

  describe('clicking on the generate feedback pairs button on the explanation page', () => {
    it('navigates the user to the session review page', () => {
      render(<App />, '/explain/' + encodedTeammatesToken)

      const generatePairsButton = screen.getByRole('button', { name: 'Generate Feedback Pairs' })
      fireEvent.click(generatePairsButton)

      expect(
        screen.getByRole('heading', { name: 'Here\'s the lineup we came up with' }),
      ).toBeVisible()
    })
  })

  describe('clicking on the start feedback session button on the review page', () => {
    it('navigates the user to the session review page', () => {
      render(<App />, '/review/' + encodedTeammatesToken)

      const startSessionButton = screen.getByRole('button', { name: 'Start Feedback Session' })
      fireEvent.click(startSessionButton)

      expect(screen.getByRole('heading', { name: 'Start feedbacking!' })).toBeVisible()
    })
  })
})
