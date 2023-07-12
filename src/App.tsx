import { decrement, incrementByValue, incremet } from "./redux/feactures/counter/counterSlice";

import { useAppDispatch, useAppSelector } from "./redux/hook";


function App() {
  const { count } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()


  return (
    <div className="flex items-center	justify-center	 gap-4">
      <div className="m-4">
        <button
          onClick={() => dispatch(incremet())}
          className="p-4 border-4 rounded-sm border-yellow-400 "
        >
          Increment
        </button>
      </div>
      <div className="m-4">{count}</div>
      <div className="m-4  ">
        <button
          onClick={() => dispatch(incrementByValue(8))}
          className="p-4 border-4 rounded-sm border-fuchsia-400"
        >
          IncrementBy value
        </button>
      </div>
      <div className="m-4  ">
        <button
          onClick={() => dispatch(decrement())}
          className="p-4 border-4 rounded-sm border-fuchsia-400"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App
