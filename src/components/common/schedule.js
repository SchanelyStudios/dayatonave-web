import React from "react";

import ClassNames from "classnames";

import ScheduleEvent from "./schedule/event";

const Schedule = ({ className, label, events }) => {
  let classNames = ClassNames(
    className,
    "schedule"
  );

  return (
    <div className={classNames}>
      <h3 className="schedule__label">{label}</h3>
      <ul className="schedule__events">
        {events.map(({ time, details }, i) => (
          <ScheduleEvent key={i} time={time}>
            {details}
          </ScheduleEvent>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
