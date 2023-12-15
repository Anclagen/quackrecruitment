"use client";
import { useState } from "react";
import { useSpring, animated, config } from "react-spring";
import useMeasure from "react-use-measure";

function ExpandableSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [measureRef, { height }] = useMeasure();

  const styles = useSpring({
    config: config.slow,
    from: {
      height: 0,
    },
    to: {
      height: isOpen ? height + 24 : 0, // 24px for padding (12px on top and 12px on bottom)
    },
  });

  return (
    <div className="w-full mb-5 border border-quackred-900 rounded-t bg-zinc-50">
      <button
        className="w-full text-left bg-quackred-100 hover:bg-quackred-200 text-black font-semibold py-2 px-4 rounded transition-colors duration-200 flex gap-6"
        onClick={() => setIsOpen((val) => !val)}
      >
        <h2 className="block w-fit">{title}</h2>{" "}
        {isOpen ? (
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7"></path>
          </svg>
        ) : (
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mt-1">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
          </svg>
        )}
      </button>

      <animated.div className="overflow-hidden" style={styles}>
        <div ref={measureRef} className="p-3 px-3 sm:px-10 bg-zinc-50">
          {children}
        </div>
      </animated.div>
    </div>
  );
}

export default ExpandableSection;
