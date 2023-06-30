import React from "react";

const Table = ({
    description,
    quantity,
    price,
    amount,
    }) => {
    
      
  return (
    <>
      <form action="">
        <table width="100%">
          <thead className="bg-gray-200">
            <tr>
              <td className="font-bold">Item description</td>
              <td className="font-bold">Quantity</td>
              <td className="font-bold">Price</td>
              <td className="font-bold">Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {description} </td>
              <td> {quantity} </td>
              <td>{price}</td>
              <td> {amount} </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default Table;
