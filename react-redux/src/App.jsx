import './App.css'
import {useSelector, useDispatch, Provider} from "react-redux"
import {increment, decrement} from './reduxSlice.js'

function App() {
    const dispatch = useDispatch()
const counter = useSelector(state => state.counter.value)

  return (
      <>
        <p>
          count is {counter}
        </p>
      <button onClick={() => dispatch(increment())}>Increment
      </button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
      </>
  )
}

export default App
