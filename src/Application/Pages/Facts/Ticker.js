import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Ticker = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  return (

    //decimals={1} for decimals in counting
    <CountUp {...rest} start={viewPortEntered ? null : 0} duration={2} >
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <h4 className={className} ref={countUpRef} > </h4>
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

export default Ticker;