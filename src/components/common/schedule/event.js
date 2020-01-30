import React from "react";

import ClassNames from "classnames";

const ScheduleEvent = ({ key, className, time, children }) => {
  let classNames = ClassNames(
    className,
    "event"
  );

  return (
    <li key={key} className={classNames}>
      <b className="event__time">
        {time}
      </b>
      <div className="event__details">
        {children}
      </div>
    </li>
  );
};

export default ScheduleEvent;
