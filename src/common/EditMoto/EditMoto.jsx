import React, { useEffect, useState } from "react";
import { ruteAdmin } from "../../constants/rute";
import Navbar from "../Navbar/Navbar";
import { ContainerEdit, ContainerButton } from "./EditMoto.style";
import { Button, Form, Alert, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useFetchMotos from "../../customHooks/useFetchMotos";

const EditMoto = () => {
  const [form, setForm] = useState({});

  const { id } = useParams();
  const { motos, loading } = useFetchMotos(`/${id}`);
  console.log(form);
  useEffect(() => {
    setForm(motos);
  }, [motos]);

  const [post, setPost] = useState("");
  const [error, setError] = useState(false);

  const changeFormData = (name, value) => {
    const localForm = { ...form };
    localForm[name] = value;

    setForm(localForm);
  };

  const submit = () => {
    fetch(`http://localhost:3002/motors/${id}`, {
      method: "PUT",
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
        setPost("PUT request failed");
      });
  };

  return (
    <>
      <Navbar
        logo="https://static.vecteezy.com/system/resources/thumbnails/011/161/739/small/motorcycles-logo-design-template-vector.jpg"
        rute={ruteAdmin}
      />
      <ContainerEdit>
        <h1>EDIT</h1>
        <div>
          <Alert
            show={error}
            variant={post === "PUT request failed" ? "danger" : "success"}
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
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <div>
          <Form style={{ width: "100%" }}>
            {Object.keys(form).map((key, index) =>
              key !== "id" ? (
                <Form.Group key={index} controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    {key.charAt(0).toUpperCase() + key.substring(1, key.length)}
                  </Form.Label>
                  <Form.Control
                    defaultValue={form?.[key] || ""}
                    onBlur={(e) => {
                      changeFormData(key, e.target.value);
                    }}
                    placeholder={
                      key.charAt(0).toUpperCase() + key.substring(1, key.length)
                    }
                  />
                </Form.Group>
              ) : null
            )}
          </Form>
        </div>
        <ContainerButton>
          <Button onClick={submit}>Edit Moto</Button>
        </ContainerButton>
      </ContainerEdit>
    </>
  );
};
export default EditMoto;
