import React from 'react';

const Table = () => {
    return (
        <>
            <table width="100%">
                <thead className='bg-gray-200'>
                    <tr>
                        <td>Item description</td>
                        <td>Quantity</td>
                        <td>Price</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Web Development service </td>
                        <td> 200 </td>
                        <td>25000</td>
                        <td>25000</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default Table;