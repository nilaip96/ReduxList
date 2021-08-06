import { INCREMENT, DECREMENT, HALF, DOUBLE, RESET } from "./counter.types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const doubleCounter = () => {
  return {
    type: DOUBLE,
  };
};

export const halfCounter = () => {
  return {
    type: HALF,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};
