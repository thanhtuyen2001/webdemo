import React from 'react'
import {Card, Button, Form} from 'react-bootstrap';


const Contact = () => {
  return (
    <div>
      <Card border="warning" style={{ width: '25rem', margin: "30px auto" }}>
      <Card.Header style={{backgroundColor: '#FFCC66'}}> <h3>Conntact Us </h3> </Card.Header>
      <Card.Body style={{backgroundColor: '#FFF7DF'}}>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{float: 'left'}}>What can we help with?</Form.Label>
            <Form.Control type="email" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{float: 'left'}}>Your name</Form.Label>
            <Form.Control type="email" placeholder="Example: Moomin" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{float: 'left'}}>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{float: 'left'}}>Subject</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{float: 'left'}}>Detail</Form.Label>
            <Form.Control type="textarea" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" style={{backgroundColor: '#FF9933'}}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default Contact