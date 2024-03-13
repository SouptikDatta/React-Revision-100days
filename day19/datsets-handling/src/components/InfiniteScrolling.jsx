import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
 
const data = new Array(1000).fill().map((_, index) => ({
  id: index,
  name: `Temp Name ${index}`,
}));
 
function InfiniteScrolling() {
  const [items, setItems] = useState(data.slice(0, 20));
 
  const fetchMoreData = () => {
    setTimeout(() => {
      setItems((prevItems) => [
        ...prevItems,
        ...data.slice(prevItems.length, prevItems.length + 20),
      ]);
    }, 1500);
  };
 
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={items.length < data.length}
      loader={<h4>Loading...</h4>}
    >
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </InfiniteScroll>
  );
}
 
export default InfiniteScrolling;