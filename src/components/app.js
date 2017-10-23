import React, { Component } from 'react';
import { Table, Jumbotron, Container, Row, Col } from 'reactstrap';
import inventory from '../modules/inventory';
import cart from '../modules/cart';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.css';

const { InventoryContainer } = inventory.containers;
const { CartContainer } = cart.containers;

export default class App extends Component {
  render() {
    return (
      <div>
        <br/>
        <Jumbotron fluid>
          <Container fluid>
            <Header /> 
            <Row>
            <Col md="7">
              <InventoryContainer />
            </Col>
            <Col md="1"></Col>
            <Col md="3">
              <CartContainer />
            </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}
