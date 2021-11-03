// import dependencies
import React from 'react'

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw'
import {setupServer} from 'msw/node'

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// the component to test
import Login from '../src/UI/Login.jsx';



// test('attemptUsername and attemptPassword work', () => {
//     const wrapper = shallow()
// })


// saving this to fallback on....

// const server = setupServer(
//     // capture "GET /greeting" requests
//     rest.get('/validateAccount', (req, res, ctx) => {
//         return res(ctx.json({test: '28Diff!'}))
//     })
// )

// // establish API mocking before all tests
// beforeAll(() => server.listen())
// // reset any request handlers that are declared as a part of our tests
// // (i.e. for testing one-time error scenarios)
// afterEach(() => server.resetHandlers())
// // clean up once the tests are done
// afterAll(() =>server.close())

// //handles error handler
// test('handles server error', async () => {
//     server.use(
//         rest.get('/validateAccount', (req, res, ctx) => {
//             return res(ctx.status(500))
//         })
//     )
// })
// // renders a test login before loading the actually DOM
// render(<Login url="/validateAccount" />)

// fireEvent.click(screen.getByText('Login'))
// // wait until the `get` request promise resolves and
// // the component calls setState and re-renders.
// // `waitFor` waits until the callback doesn't throw an error

// await waitFor(() =>
//   // getByRole throws an error if it cannot find an element
//   screen.getByRole('heading'),
// )
