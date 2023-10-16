import React, { useState, useContext } from "react";
import { ruteAdmin } from "../../constants/rute";
import Navbar from "../Navbar/Navbar";
import { ContainerAdd, ContainerButton } from "./AddMotos.style";
import { Button, Form, Alert, Spinner } from "react-bootstrap";
import { MotoContext } from "../../store/Motos/context";
import { addToMoto, closeMessage } from "../../store/Motos/actions";

const AddMotos = () => {
  const { stateGlobal, dispatch } = useContext(MotoContext);

  const [form, setForm] = useState({
    name: "",
    year: "",
    logo: "",
    cc: "",
    color: "",
    img: "",
  });

  const changeFormData = (name, value) => {
    const localForm = { ...form };
    localForm[name] = value;

    setForm(localForm);
  };

  const submit = () => {
    const actionAdd = addToMoto(form, dispatch);
    dispatch(actionAdd);
  };

  const closeSubmit = () => {
    const functionOfClose = closeMessage();
    dispatch(functionOfClose);
  };

  console.log(stateGlobal);
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
            show={stateGlobal?.displayAddMotoMessage}
            variant={
              stateGlobal?.addMotoMessage === "POST request failed"
                ? "danger"
                : "success"
            }
          >
            <Alert.Heading>My Alert</Alert.Heading>
            <p style={{ width: "300px" }}>{stateGlobal?.addMotoMessage}</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={closeSubmit} variant="outline-danger">
                Close
              </Button>
            </div>
          </Alert>
        </div>
        <div>
          {stateGlobal.isLoading ? (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          ) : (
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
          )}
        </div>
        <ContainerButton>
          {!stateGlobal.isLoading && <Button onClick={submit}>Add Moto</Button>}
        </ContainerButton>
      </ContainerAdd>
    </>
  );
};
export default AddMotos;
