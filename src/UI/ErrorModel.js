import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModel.module.css";

import Button from "./Button";
import Card from "./Card";

function ErrorModel(props) {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
  };

  const ModalOverlay = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.errorMessage.title}
          message={props.errorMessage.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-modal-root")
      )}
    </Fragment>
  );
}

export default ErrorModel;
