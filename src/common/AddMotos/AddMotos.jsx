import React, { useState } from "react";
import { ruteAdmin } from "../../constants/rute";
import Navbar from "../Navbar/Navbar";
import { ContainerAdd, ContainerButton } from "./AddMotos.style";
import { Button, Form, Alert } from "react-bootstrap";

const AddMotos = () => {
  const [form, setForm] = useState({
    name: "",
    year: "",
    logo: "",
    cc: "",
    color: "",
    img: "",
  });
  const [post, setPost] = useState("");
  const [error, setError] = useState(false);

  const changeFormData = (name, value) => {
    const localForm = { ...form };
    localForm[name] = value;

    setForm(localForm);
  };

  const submit = () => {
    fetch("http://localhost:3002/motors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then(() => {
        setError(true);
        setPost("POST request successful");
      })
      .catch((error) => {
        setError(true);
        setPost("POST request failed");
      });
  };

  return (
    <>
      <Navbar
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteAdmin}
      />
      <ContainerAdd>
        <h1>ADD</h1>
        <div>
          <Alert
            show={error}
            variant={post === "POST request failed" ? "danger" : "success"}
          >
            <Alert.Heading>My Alert</Alert.Heading>
            <p style={{ width: "300px" }}>{post}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setError(false)} variant="outline-danger">
                Close
              </Button>
            </div>
          </Alert>
        </div>
        <div>
          <Form style={{ width: "100%" }}>
            {Object.keys(form).map((key, index) => (
              <Form.Group key={key} controlId="exampleForm.ControlInput1">
                <Form.Label>
                  {key.charAt(0).toUpperCase() + key.substring(1, key.length)}
                </Form.Label>
                <Form.Control
                  onBlur={(e) => {
                    changeFormData(key, e.target.value);
                  }}
                  placeholder={
                    key.charAt(0).toUpperCase() + key.substring(1, key.length)
                  }
                />
              </Form.Group>
            ))}
          </Form>
        </div>
        <ContainerButton>
          <Button onClick={submit}>Add Moto</Button>
        </ContainerButton>
      </ContainerAdd>
    </>
  );
};
export default AddMotos;
