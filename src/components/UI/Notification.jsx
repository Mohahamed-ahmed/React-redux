import { useEffect, useState } from "react";
import classes from "./Notification.module.css";

const Notification = (props) => {
  const [isShown, setIsShown] = useState(true);

  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  useEffect(() => {
    const displayTime = setInterval(() => {
      setIsShown(false);
    }, 2000);

    return () => {
      setIsShown(true);
      clearInterval(displayTime);
    };
  }, [props.status]);

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    isShown && (
      <section className={cssClasses}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
      </section>
    )
  );
};

export default Notification;
