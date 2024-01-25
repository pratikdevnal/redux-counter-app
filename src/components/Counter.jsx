import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-blue-500 text-4xl font-bold mb-4">Counter</h1>

        <div className="flex justify-center items-center space-x-4">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-full"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </button>
          <span className="text-blue-500 text-3xl font-semibold">{count}</span>
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-full"
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
