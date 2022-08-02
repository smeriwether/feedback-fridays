import { ReactElement } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render as rtlRender } from '@testing-library/react'

const render = (ui: ReactElement, route = '', renderOptions = {}) => {
  const wrapper = ({ children }: { children: ReactElement }): ReactElement => {
    return <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
  }

  return rtlRender(ui, { wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { render }
