import { Provider } from 'react-redux'
import Cart from './componets/Cart'
import Catalog from './componets/Catalog'
import store from './store'

function App() {

  return (
    <Provider store={store}>
      <Catalog />
      <Cart />
    </Provider>
  )
}

export default App
