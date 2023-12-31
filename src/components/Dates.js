import React from "react";

const Dates = ({invoiceNumber, dueDate,invoiceDate }) => {
  return (
    <>
      <article className="my-5 flex items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice Number :</span> {invoiceNumber}
          </li>
          <li className="p-1">
            <span className="font-bold">Invoice Date :</span>{invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">Due Date :</span> {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
};

export default Dates;
