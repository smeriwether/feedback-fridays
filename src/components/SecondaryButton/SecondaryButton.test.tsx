import { render, screen } from '../../test-utils'
import SecondaryButton from '.'

describe('<SecondaryButton />', () => {
  it('displays the text from props', () => {
    render(<SecondaryButton text='Example Text' />)
    expect(screen.getByText('Example Text')).toBeVisible()
  })

  it('displays the icon from props', () => {
    render(<SecondaryButton text='Example Text' icon={<span>Icon</span>} />)
    expect(screen.getByText('Icon')).toBeVisible()
  })
})
