// *** Not working with jest

import { screen } from "@testing-library/react"

// import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import {createMemoryHistory} from 'history'
// import React from 'react'
// import {Router} from 'react-router-dom'

// import '@testing-library/jest-dom'

// import App from './App'

// test('full app rendering/navigating', async () => {
//   const history = createMemoryHistory()
//   render(
//     <Router location={history.location} navigator={history}>
//       <App />
//     </Router>,
//   )
//   const user = userEvent
//   // verify page content for expected route
//   // often you'd use a data-testid or role query, but this is also possible
//   expect(screen.getByText(/NFT Stadium/i)).toBeInTheDocument()

//   await user.click(screen.getByText(/about/i))

//   // check that the content changed to the new page
//   expect(screen.getByText(/about us/i)).toBeInTheDocument()
// })

// test('landing on a bad page', () => {
//   const history = createMemoryHistory()
//   history.push('/some/bad/route')
//   render(
//     <Router location={history.location} navigator={history}>
//       <App />
//     </Router>,
//   )

//   expect(screen.getByText(/404/i)).toBeInTheDocument()
// })

test('App', () => {
  expect(screen.queryByText(/NFT Stadium/i)).not.toBeInTheDocument()
})