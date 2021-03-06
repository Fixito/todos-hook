import { useEffect, useReducer } from "react";

const useLocalStorageStateReducer = (key, defaultVal, reducer) => {
  // make piece of state, based off of value in localStorage (or default)
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let value;

    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (e) {
      value = defaultVal;
    }

    return value;
  });

  // use useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
};

export { useLocalStorageStateReducer };
