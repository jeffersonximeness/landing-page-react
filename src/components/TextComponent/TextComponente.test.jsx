import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { TextComponent } from '.'

describe('<TextComponente />', () => {
  it('should render', () => {
    renderTheme(<TextComponent>Children</TextComponent>)
    expect(screen.getByText('Children')).toBeInTheDocument()
  })
})
