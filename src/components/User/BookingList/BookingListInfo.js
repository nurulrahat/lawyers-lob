import React from 'react';
   
const BookingListInfo = (props) => {
    console.log(props.bookedData)
    const { name, price, date,status } = props.bookedData;
    return (
        <>
        <tr className="text-light">
                     <td>{name}</td>
                     <td>{price}</td>
                     <td>{date}</td>
                     <td>{status}</td>
                 </tr>
     </>
    );
};

export default BookingListInfo;