import {useContext} from 'react'
import { FooContext, BarContext, BazContext, CounterContext } from '.';

function App() {
  const foo = useContext(FooContext)
  const bar = useContext(BarContext)
  const baz = useContext(BazContext)
  const [count, setCount] = useContext(CounterContext)
  
  return (
    <>

      <p>
        {foo} {bar} {baz} {count}
      </p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </>
  );
}

export default App;
