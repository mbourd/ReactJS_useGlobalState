import useGlobalState from "./useGlobalState";

const PUBSUB_UNIQUE_KEY = "someUniqueKey";

const ComponentOne = () => {
  const [count, setCount] = useGlobalState<number>({
    initialState: 0,
    shareKey: PUBSUB_UNIQUE_KEY
  });
  const [count1, setCount1] = useGlobalState<number>({
    initialState: 0,
    shareKey: "11"
  });

  return (
    <div>
      <h2>Component one</h2>
      <div>Count: {count}</div>
      <div>Count1: {count1}</div>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <button onClick={() => setCount1(count1 + 1)}>Add 1</button>
    </div>
  );
};

export default ComponentOne;
