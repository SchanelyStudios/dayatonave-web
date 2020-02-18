import React, { useState, useEffect, useRef } from "react";

import ClassNames from "classnames";

//
// From https://overreacted.io/making-setinterval-declarative-with-react-hooks/
//
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const getNextItem = (current, total) => {
  let nextItem = current + 1;
  if (nextItem >= total) {
    nextItem = 0;
  }
  return nextItem;
}

const getPrevItem = (current, total) => {
  let prevItem = current - 1;
  if (prevItem < 0) {
    prevItem = total - 1;
  }
  return prevItem;
}

const Features = ({ features }) => {

  const [ currentItem, setCurrentItem ] = useState(0);

  // TODO: Reset timer each time??
  useInterval(() => {
    setCurrentItem(getNextItem(currentItem, features.length));
  }, 5000);

  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className="feature-container">
      <ul className="features">
        {features.map(({ slug, name, cover }, i) => {
          let featureClassName = ClassNames(
            "feature",
            {
              [`feature--active`]: i === currentItem
            }
          );
          return (
            <li className={featureClassName} key={i}>
              <a className="feature__link" href={slug} title={name}>
                <img
                  className="feature__figure"
                  src={cover.src}
                  alt={name}
                />
              </a>
            </li>
          );
        })}
      </ul>

      <button
        className="btn--clean feature-nav feature-nav--prev"
        onClick={() => setCurrentItem(getPrevItem(currentItem, features.length))}
      >
        <i className="icon icon--size-display-1 icon--angle-left"></i>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="btn--clean feature-nav feature-nav--next"
        onClick={() => setCurrentItem(getNextItem(currentItem, features.length))}
      >
        <i className="icon icon--size-display-1 icon--angle-right"></i>
        <span className="visually-hidden">Next</span>
      </button>

      <ul className="feature-tabs">
        {features.map(({ name }, i) => {
          let featureClassName = ClassNames(
            "feature-tab",
            {
              [`feature-tab--active`]: i === currentItem
            }
          );
          return (
            <li className={featureClassName} onClick={() => setCurrentItem(i)}>
              <b className="visually-hidden">{name}</b>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Features;
