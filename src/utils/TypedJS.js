import React from "react";
import Typed from "typed.js";

export default function TypedJS({ string, loop, speed }) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: string,
      typeSpeed: speed ? speed : 50,
      backSpeed: 50,
      loop: loop ? loop : false,
      shuffle: true,
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
