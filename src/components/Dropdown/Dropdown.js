import React, { Component } from "react";
import css from "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  // заменили через toggle

  render() {
    const { visible } = this.state; // деструктуризация
    return (
      <div className="Dropdown">
        <button type="button" className="Dropdown_toggle" onClick={this.toggle}>
          {visible ? "Скрыть" : "Показать"}
        </button>

        {visible && <div className="Dropdown_menu">Выпадающее меню</div>}
      </div>
    );
  }
}

export default Dropdown;
