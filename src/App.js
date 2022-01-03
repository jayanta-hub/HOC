import './App.css';
import ClickCounter from './HOC/ClickCounter/ClickCounter'
import HoverCounter from './HOC/HoverCounter/HoverCounter'

function App() {
  return (
    <div className="App">
     <HoverCounter/>
     <ClickCounter name={"garu"}/>
    </div>
  );
}

export default App;
