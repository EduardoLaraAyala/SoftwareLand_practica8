import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody, CardFooter } from "reactstrap";

function UserComponent() {
  const [userInfo, setUserInfo] = useState(null);

  const fetchData = () => {
    fetch("https://random-data-api.com/api/users/random_user")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Hubo un problema al realizar la solicitud: " + response.status
          );
        }
        return response.json();
      })
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error("Hubo un problema con la solicitud:", error.message);
      });
  };

  return (
    <div className="container">
      <h1 className="mt-4">Consulta API de Random Data</h1>
      <Button color="primary" onClick={fetchData} className="mt-4">
         Información Usuario Aleatoria
      </Button>
      {userInfo && (
        <Card className="mt-4">
          <CardHeader>
            {userInfo.first_name} {userInfo.last_name}
          </CardHeader>
          <CardBody>
            <p>
              <strong>Correo Electrónico:</strong> {userInfo.email}
            </p>
            <p>
              <strong>Género:</strong> {userInfo.gender}
            </p>
            <p>
              <strong>Dirección:</strong> {userInfo.address.street_name}{" "}
              {userInfo.address.street_address}
            </p>
            <p>
              <strong>Ciudad:</strong> {userInfo.address.city}
            </p>
            <p>
              <strong>Estado:</strong> {userInfo.address.state}
            </p>
            <p>
              <strong>País:</strong> {userInfo.address.country}
            </p>
            <p>
              <strong>Código Postal:</strong> {userInfo.address.zip_code}
            </p>
          </CardBody>
          <CardFooter>
            <p>
              <strong>Plan:</strong> {userInfo.subscription.plan}
            </p>
            <p>
              <strong>Estado:</strong> {userInfo.subscription.status}
            </p>
            <p>
              <strong>Método de Pago:</strong>{" "}
              {userInfo.subscription.payment_method}
            </p>
            <p>
              <strong>Término:</strong> {userInfo.subscription.term}
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}

export default UserComponent;
