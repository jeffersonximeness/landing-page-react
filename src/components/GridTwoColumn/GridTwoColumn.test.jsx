import { screen } from '@testing-library/react'
import { renderTheme } from '../../styles/render-theme'
import { GridTwoColum } from '.'

import mock from './mock'

describe('<GridTwoColum />', () => {
    it('should render', () => {

        renderTheme(<GridTwoColum {...mock} />)
        expect(screen.getByRole('heading')).toBeInTheDocument()
    })
})
