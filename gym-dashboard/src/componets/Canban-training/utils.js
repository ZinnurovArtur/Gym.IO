import db from "../../firebase";
export const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

export const extractPriority = (priority) => {
  switch (priority) {
    case "low": {
      return <div>Low</div>;
    }

    case "medium": {
      return <div>Medium</div>;
    }

    case "high": {
      return <div>High</div>;
    }

    default:
      return null;
  }
};
