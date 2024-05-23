// import React from 'react';

// let Pagination = ({ carsPerPage, totalCars, paginate }) => {
//   let pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination justify-content-center">
//         {pageNumbers.map((number) => (
//           <li key={number} className="page-item">
//             <a
//               onClick={() => paginate(number)}
//               href="#!"
//               className="page-link"
//             >
//               {number}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

import React from 'react';

const Pagination = ({ carsPerPage, totalCars, paginate }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => paginate(number)}
              href="#!"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;



