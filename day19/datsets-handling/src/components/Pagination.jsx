import { useState } from 'react';
import ReactPaginate from 'react-paginate';
 
const data = new Array(2000).fill().map((_, index) => ({
  id: index,
  name: `Temp Name ${index}`,
}));
 
function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentData = data.slice(offset, offset + itemsPerPage);
 
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
 
  return (
    <div>
      {currentData.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
}
 
export default Pagination;