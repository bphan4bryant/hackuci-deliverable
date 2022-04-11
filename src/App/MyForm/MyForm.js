import React from 'react';
import './MyForm.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

const URL = "https://hack-tech-app-endpoint.herokuapp.com/";

class MyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Name : '',
            Email : '',
            Fact : '',
            Validated : false
        };

        this.handleChange = this.handleChange.bind(this)
    };

    

    handleChange = (event) => {
        var update = {};
        update[event.target.id] = event.target.value;
        this.setState(update);
    };

    handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            console.log('In Fetch')
            axios.get(`${URL}test?name=${this.state.Name}&email=${this.state.Email}&funfact=${this.state.Fact}`)
                .then(response => {
                    console.log(response.status);
                    alert("Successfully Submitted!");
                    this.setState({
                        Name : '',
                        Email : '',
                        Fact : '',
                        Validated : false
                    });
                })
                .catch((error) => {
                    console.log(error);
                    console.log("you bozo");
                })
        }

        this.setState({Validated : true});
        event.preventDefault();
    }

    render() {
        return (
            <div className="Back px-4 py-5">
            <h1 className="Title">Hack UCI Application</h1>
            <Form className="form-vertical" noValidate validated={this.state.Validated} onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="Name">
                    <Form.Label className="Label">Name</Form.Label>
                    <Form.Control 
                        required
                        type="name" 
                        value = {this.state.Name}
                        placeholder="Enter Name" 
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label className="Label">Email</Form.Label>
                    <Form.Control 
                        required
                        type="email" 
                        value = {this.state.Email}
                        placeholder="Enter Email" 
                        onChange={this.handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Fact">
                    <Form.Label className="Label">Fun Fact</Form.Label>
                    <Form.Control 
                        required
                        type="fact" 
                        value = {this.state.Fact}
                        as="textarea" 
                        rows={3} 
                        placeholder="Tell us something interesting!" 
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <div className="form-bot">
                    <Button className="px-4 rounded-pill border border-white" variant="primary" type="submit">Submit</Button>
                </div>
            </Form>
            </div>
        )
    }
}

export default MyForm;