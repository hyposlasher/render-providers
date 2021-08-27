import {useContext} from 'react'
import { FooContext, BarContext, BazContext } from '.';

function App() {
  const foo = useContext(FooContext)
  const bar = useContext(BarContext)
  const baz = useContext(BazContext)
  
  return (
    <p>
      {foo} {bar} {baz}
    </p>
  );
}

export default App;
