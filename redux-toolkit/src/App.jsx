import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './Features/CounterSlice.js';


export default function App(){
  const dispatch=useDispatch();
  const counter=useSelector((state)=>state.counter.value);
  return(<>
  <h1>Hello shubham</h1>
  <h1>Counter:{counter}</h1>
  <button onClick={()=>dispatch(increment())}>Increment</button>
  <button onClick={()=>dispatch(decrement())}>Decrement</button>
  <button onClick={()=>dispatch(incrementByAmount(5))}>Increment by 5</button>
  </>)
}