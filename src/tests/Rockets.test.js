import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { getByText, render } from '@testing-library/react'
import store from "../redux/store"
import App from "../App"

describe('Rocket page', () => {
  test('It renders rockets', async () => {
    const tree = render(<Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>)
    expect(getByText(tree.container, 'Rockets')).toBeInTheDocument();
  })

})