import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './components/Store';
import Cart from './components/Cart';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
   
   <Cart/>
    </div>
    </Provider>
  );
}

export default App;
