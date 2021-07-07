import { useState } from 'react';
import {Consumera} from './components/consumer';

function App() {
  const [flag, setFlag] = useState(false);
  return (
    <div className="App">
      <button onClick={() => {
          setFlag(!flag)
        }}>Click</button>
      {!flag ? <Consumera/> : <span>JOPA</span>}
    </div>
  );
}

export default App;
