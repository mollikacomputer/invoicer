import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  // Submit form function

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!description || !quantity || !price){
      alert("Please fill all fields")
    }else{
      const newItems = {
        id: uuidv4(),
        description,
        quantity,
        price,
        amount,
      };
  
      setDescription("");
      setQuantity("");
      setPrice("");
      setAmount("");
      setList([...list, newItems]);
      setIsEditing(false);
    }
  };

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price);
    };
    calculateAmount(amount);
  }, [amount, setAmount, quantity, price]);

  // // Calculate total amount of items in table
  
  let rows = document.querySelectorAll(".amount")
  let sum = 0

  for (let i = 0; i < rows.length; i++){
    if(rows[i].className === "amount"){
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
      setTotal(sum)
    }
  }


  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
  };
  // Delete function
  const deleteRow = (id) => {
    setList(list.filter((row) => row.id !== id));
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="flex flex-col">
            <label htmlFor="name"> Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="description"
              autoComplete="off"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <article className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="address">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              autoComplete="off"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Your price"
              autoComplete="off"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Amount</label>
            <p> {amount}</p>
          </div>
        </article>
        <button
          type="submit"
          className="bg-blue-500 mb-10 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        >
          {isEditing ? "Editing Row Items" : "Add Table Items"}
        </button>
      </form>

      <table width="100%" className="mb-10">
        <thead className="bg-gray-200">
          <tr>
            <td className="font-bold">Item description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>

        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td> {description} </td>
                <td> {quantity} </td>
                <td>{price}</td>
                <td className="amount"> {amount} </td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-green-500 font-bold text-xl" />{" "}
                  </button>
                </td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <AiOutlineEdit
                      ete
                      className="text-red-500 font-bold text-xl"
                    />
                  </button>
                </td>
                <ToastContainer />
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div className="flex justify-end items-end"><h2 className="text-2xl font-bold"> Total Amount {total}</h2></div>
    </>
  );
};

export default TableForm;
