import React from "react";
class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Belajar ReactJs",
      subTitle: "Belajar ReactJs Komponen",
    };
  }

  changeTitle = () => {
    this.setState({
      title: "Eduwork Belajar ReactJS",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subTitle}</h2>
        <button onClick={this.changeTitle}>Ubah judul</button>
      </div>
    );
  }
}
export default HeaderComponent;
