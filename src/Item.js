import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
class Item extends Component {
  render() {
    const p = this.props;

    return (
      <tbody>
        <tr>
          <td>{p.regionid}</td>
          <td>{p.cityname}</td>
          <td>{p.statename}</td>
          <td>{p.citypopulation}</td>
          <td>{p.area}</td>
        </tr>
      </tbody>
    );
  }
}

export default Item;
