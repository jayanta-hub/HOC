import './App.css';
import ClickCounter from './HOC/ClickCounter/ClickCounter'
import HoverCounter from './HOC/HoverCounter/HoverCounter'

function App() {
  return (
    <div className="App">
     <HoverCounter/>
     <ClickCounter/>
    </div>
  );
}

export default App;
