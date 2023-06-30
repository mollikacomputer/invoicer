import React from "react";

const Table = ({
    description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    }) => {

      
  return (
    <>
      <form action="">
        <table width="100%">
          <thead className="bg-gray-200">
            <tr>
              <td>Item description</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {description} </td>
              <td> {quantity} </td>
              <td>{price}</td>
              <td> {setAmount(quantity * price)} </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default Table;
