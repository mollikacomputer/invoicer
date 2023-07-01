import React from "react";

const Table = ({
    description,
    quantity,
    price,
    amount,
    list,
    }) => {
    
      
  return (
    <>
      <form action="" className="mb-10">
        <table width="100%">
          <thead className="bg-gray-200">
            <tr>
              <td className="font-bold p-2 rounded">Notes </td>
            </tr>
          </thead>
          <tbody >
            <tr >
              <td> {description} </td>
            </tr>
          </tbody>
        </table>
      </form>


      <table width="100%" className='mb-10'>
               <thead className="bg-gray-200">
                 <tr>
                   <td className="font-bold p-2 rounded">Item description</td>
                   <td className="font-bold p-2 rounded">Quantity</td>
                   <td className="font-bold p-2 rounded">Price</td>
                   <td className="font-bold p-2 rounded">Amount</td>
                 </tr>
               </thead>
               
                {
                    list.map(({id, description, quantity, price, amount})=>(
                <React.Fragment key={id}>
                 <tbody>
                 <tr>
                   <td> {description} </td>
                   <td> {quantity} </td>
                   <td>{price}</td>
                   <td> {amount} </td>
                 </tr>

               </tbody>
                </React.Fragment>
                    ))
                }
             </table> 
    </>
  );
};

export default Table;
