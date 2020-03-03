import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class HomeComponent extends Component {
    render() {
        return (
            <div className="App">
                <div className="Card-layout-left">
                <Card bg="info" text="white" border="primary" style={{ width: '36rem', height: '16rem' }}>
                    <Card.Header>Toolbox 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Safe Online Journal</Card.Title>
                        <Card.Text>
                            A safe online journal with advanced encryption. The techologies used Angular4, Spring boot,  AWS RDS MySQL and Spring Restful API.
                        </Card.Text>
                        <Button variant="primary" href="http://localhost:8080">Go</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="Card-layout-bottom">
                <Card bg="info" text="white" border="primary" style={{ width: '36rem', height: '16rem' }}>
                    <Card.Header>Toolbox 2</Card.Header>
                    <Card.Body>
                        <Card.Title>Predict As You Go</Card.Title>
                        <Card.Text>
                            Predict waiting times in airport before you go. This predicts future dates before even you
                            book tickets. The techologies used React and Python.
                        </Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="Card-layout-left">
                <Card bg="info" text="white" border="primary" style={{ width: '36rem', height: '16rem' }}>
                    <Card.Header>Toolbox 3</Card.Header>
                    <Card.Body>
                        <Card.Title>Price Checker</Card.Title>
                        <Card.Text>
                            Check price for a particular product whether it is going up or down. The techonlogies used
                            Core Java, React, Spring boot.
                        </Card.Text>
                        <Button variant="primary">Go</Button>
                    </Card.Body>
                </Card>
                </div>
                <div className="Card-layout-bottom">
                <Card bg="info" text="white" border="primary" style={{ width: '36rem', height: '16rem' }}>
                    <Card.Header>Toolbox 4</Card.Header>
                    <Card.Body>
                        <Card.Title>Baseball Schedule</Card.Title>
                        <Card.Text>
                            Check your favorite team's schedule and TV listings. The techonlogies used
                            React, Spring boot.
                        </Card.Text>
                            <Button variant="primary">Go</Button>
                    </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
}

export default HomeComponent