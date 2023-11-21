import React, { useEffect, useState } from "react";

const TimeAgo = ({ datetime }) => {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const calculateTimeDifference = () => {
      const now = new Date();
      const timeDifference = now - new Date(datetime);
      const seconds = Math.floor(timeDifference / 1000);

      if (seconds < 60) {
        setFormattedTime(`${seconds} seg`);
      } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        setFormattedTime(`${minutes} min`);
      } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        setFormattedTime(`${hours}h`);
      } else {
        const days = Math.floor(seconds / 86400);
        setFormattedTime(`${days} días`);
      }
    };

    calculateTimeDifference();

    const interval = setInterval(calculateTimeDifference, 60000);

    return () => clearInterval(interval);
  }, [datetime]);

  return <span>{formattedTime}</span>;
};

export default TimeAgo;
