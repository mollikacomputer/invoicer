import React, { useEffect } from 'react';

const TableForm = ({
    description,
    setDescription,
    quantity,
    setQuantity,
    price,
    setPrice,
    amount,
    setAmount,
    
    }) => {
        // const calculateAmount= (amount) =>{
        //     setAmount(quantity * price)
        // }

        useEffect(()=>{
            const calculateAmount = (amount) =>{
                setAmount(quantity*price);
            }
            calculateAmount(amount)
        },[amount,setAmount, quantity, price])

    return (
        <>
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
            
        </>
    );
};

export default TableForm;