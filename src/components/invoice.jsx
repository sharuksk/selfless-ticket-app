import React from 'react';


const Invoice = ({ data, total }) => {
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Invoice</h1>
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Description</th>
              <th>Item Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.itemName}</td>
                <td>{item.itemDescription}</td>
                <td>QAR {item.itemPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total Amont: QAR {total}</h3>
      </div>
    );
  };

export default Invoice;