import React from "react";

const ClientDetails = ({clientName, clientAddress}) => {
  return (
    <>
      <section className="m6-5">
        <h1 className="text-xl uppercase"> {clientName} </h1>
        <p> {clientAddress}</p>
      </section>
    </>
  );
};

export default ClientDetails;
