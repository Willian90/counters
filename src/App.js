import { Provider } from 'react-redux';
import './App.css';
import Contador from './components/Contador';
import ContadorRedux from './components/ContadorRedux';
import Users from './components/Users';
import store from './store';



function App() {
  return (
    
    <div className='container'>
      <Contador/>
      <Provider store={store}>
        <ContadorRedux/>
        <Users/>
      </Provider>
    </div>
  );
}

export default App;
