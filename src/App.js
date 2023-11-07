import "./App.css";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

function App() {
  const [userFormData, setUserFormData] = useState({
    city: "",
    month: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted city:", userFormData.city);
  };

  console.log(userFormData);

  return (
    <div className="App">
      <Container>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="user-city">
            <Form.Label>Enter a City: </Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="city"
              value={userFormData.city}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
