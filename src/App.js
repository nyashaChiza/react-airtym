import './App.css';

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UserCard from './UserCard';
import TransactionCard from './TransactionCard';
import BottomNav from './BottomNav'


function App() {

  const user = {
    name: 'Alice',
    email: 'alice@example.com',
    address: '123 Main St',
  };

  const transactions = [
    { id: 1, date: '4/22/2023', amount: '$10.00' },
    { id: 2, date: '4/20/2023', amount: '$5.00' },
    { id: 3, date: '4/18/2023', amount: '$20.00' },
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <UserCard user={user} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TransactionCard transactions={transactions} />
          </Col>
        </Row>
      </Container>
      <BottomNav />
    </div>
  )

}

export default App;
