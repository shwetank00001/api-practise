import React, { Component, Fragment } from "react";
import Modal from "@atlaskit/modal-dialog";
import Button from "@atlaskit/button";
import Select from "react-select";
import { stateOptions } from "./docs/data";

export default class MenuPortal extends Component {
  state = { 
    isOpen: false
  };
  open = () => {
    this.setState({ isOpen: true });
  };
  close = () => {
    this.setState({ isOpen: false });
  };
  toggleMode = () => {
    this.setState(state => ({ isFixed: !state.isFixed }));
  };
  render() {
    const { close, open } = this;
    const { isOpen } = this.state;
    return (
      <Fragment>
        <Button onClick={open}>Open Modal</Button>
        {isOpen ? (
          <Modal onClose={close}>
            <Select
              defaultValue={stateOptions[0]}
              styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
              menuPortalTarget={document.body}
              options={stateOptions}
            />
          </Modal>
        ) : null}
      </Fragment>
    );
  }
}
