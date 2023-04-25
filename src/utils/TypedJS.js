import React from "react";
import Typed from "typed.js";

export default function TypedJS({ string, delay }) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: string,
      typeSpeed: 50,
      backSpeed: 50,
      startDelay: delay > 0 ? delay : 0,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} />
    </div>
  );
}
