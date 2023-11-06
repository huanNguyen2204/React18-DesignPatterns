import { useState } from "react";
import { Transition } from "react-transition-group";

const TransitionFC = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>

      <Transition in={show} timeout={300}>
        {(state) => (
          <div
            style={{
              transition: "opacity 300ms ease-out",
              opacity: state === "entered" ? 1 : 0,
            }}
          >
            {show && <p>Hello, world!</p>}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default TransitionFC;
