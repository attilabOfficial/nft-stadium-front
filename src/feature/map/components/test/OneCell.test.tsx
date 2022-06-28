import { render, screen } from '@testing-library/react'
import React from 'react'

import { OneCell } from '../OneCell'

test('OneCell render the img', () => {
    render(
        <OneCell
            id={3}
            img={'test.jpg'}
            owner="192"
            centerRef={null}
            clickOnCell={() => {}}
        />
    )

    const renderedImg = screen.getByRole('img')
    expect(renderedImg).toHaveAttribute('src', 'test.jpg')
})
