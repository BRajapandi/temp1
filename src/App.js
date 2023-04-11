import './App.css';
import SecondFile from './components/SecondFile';
import FirstFile from './components/firstFile';
import { Notifications } from 'react-push-notification';

function App() {
  return (
    <div className="App">
      <Notifications />
     <FirstFile />
     <SecondFile />
    </div>
  );
}

export default App;
