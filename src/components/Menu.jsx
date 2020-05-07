import React from "react";
import { Table } from "semantic-ui-react";
import { getMenu } from "../modules/requestProducts";
import { Component } from "react";

class Menu extends Component {
  state = {
    menu: [],
  };

  async componentDidMount() {
    let result = await getMenu();
    this.setState({ menu: result.data.products });
  }

  render() {
    let menu;
    menu = this.state.menu.map((product) => {
      return (
        <Table.Row key={product.id} id={"product-" + product.id}>
          <Table.Cell id="product-title">{product.title}</Table.Cell>
          <Table.Cell id="product-description">
            {product.description}
          </Table.Cell>
          <Table.Cell id="product-price">{product.price} $</Table.Cell>
        </Table.Row>
      );
    });

    return (
      <div>
        <h1>Menu</h1>
        <Table unstackable>
          <Table.Body>{menu}</Table.Body>
        </Table>
      </div>
    );
  }
}

export default Menu;