import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { LogoLink } from '.'
import debug from 'debug'

describe('<LogoLink />', () => {

  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />)
    expect(screen.getByRole('heading', { name: 'Olá mundo' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute('href', '#target')
  })

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />)
    const heading = screen.getByRole('heading', { name: 'Olá mundo' })

    expect(heading.firstChild.firstChild).toHaveAttribute('src', 'image.jpg')
  })

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />)

    expect(screen.getByRole('img', { name: 'Olá mundo' })).toHaveAttribute('src', 'image.jpg')
  })
})
