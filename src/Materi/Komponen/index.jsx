import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";
import HeaderComponent from "./pembahasan/HeaderComponent";

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <ClassComponent nama="Luthfi" />
        <FunctionalComponent />
        <HeaderComponent />
      </div>
    );
  }
}
