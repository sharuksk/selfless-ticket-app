import React from 'react';

// Sample invoice data
const invoiceData = [
  { ItemID: 1, ItemPrice: 50, ItemDesc: 'Item 1 Description', SoldStatus: true },
  { ItemID: 2, ItemPrice: 100, ItemDesc: 'Item 2 Description', SoldStatus: false },
  { ItemID: 3, ItemPrice: 150, ItemDesc: 'Item 3 Description', SoldStatus: true }
];
const Invoice = ({ data }) => {
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Invoice</h1>
        <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Item ID</th>
              <th>Item Price</th>
              <th>Item Description</th>
              <th>Sold Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.ItemID}>
                <td>{item.ItemID}</td>
                <td>${item.ItemPrice.toFixed(2)}</td>
                <td>{item.ItemDesc}</td>
                <td>{item.SoldStatus ? 'Sold' : 'Available'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Invoice;