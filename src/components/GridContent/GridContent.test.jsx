import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { GridContent } from '.'
import mock from './mock'

describe('<GridContent />', () => {

  it('should render', () => {
    renderTheme(<GridContent {...mock} background={false} />)
    expect(screen.getByLabelText('Grid content')).toBeInTheDocument()
  })
})
