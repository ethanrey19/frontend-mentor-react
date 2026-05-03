import { useEffect } from "react";

const UsePageBackground = (color) => {
  useEffect(() => {
    const previous = document.body.style.backgroundColor;

    document.body.style.backgroundColor = color;

    return () => {
      document.body.style.backgroundColor = previous;
    };
  }, [color]);
};

export default UsePageBackground;