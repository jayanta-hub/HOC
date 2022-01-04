import './App.css';
import ClickCounter from './HOC/ClickCounter/ClickCounter'
import HoverCounter from './HOC/HoverCounter/HoverCounter'
import Home from './Component/Home'

function App() {
  
  return (
    <div className="App">
     <HoverCounter/>
     <ClickCounter name={"garu"}/>
     <Home/>
    </div>
  );
}

export default App;
