import './App.css';
import React from 'react';
import { Card } from 'react-bootstrap';

function UserCard({ user }){
    return (
        <Card bg="info" text="dark" className="my-3" border="info" rounded>
            <Card.Header>User Information</Card.Header>
            <Card.Body>
                <Card.Title> {user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>{user.phone_number}</Card.Text>
            </Card.Body>
        </Card>
    );
}
export default UserCard;