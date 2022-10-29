
import React from 'react';

const List = ({ product }) => {
  return (
    <>
      {people.map((product) => {
        const { id, tittle, price, rating } = product;
        return (
          <article key={id} className='person'>
            {/* <img src={image} alt={name} /> */}
            <div>
              <h4>{tittle}</h4>
              <p>INR {price} </p>
              <p>Rating {rating}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;