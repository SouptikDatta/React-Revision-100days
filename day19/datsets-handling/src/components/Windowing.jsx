import { FixedSizeList as List } from 'react-window';
 
const data = new Array(1000).fill().map((_, index) => ({
  id: index,
  name: `Temp Name ${index}`,
}));
 
const Row = ({ index, style }) => (
  <div style={style}>
    <h3>{data[index].name}</h3>
  </div>
);
 
function Windowing() {
  return (
    <List
      height={400}
      itemCount={data.length}
      itemSize={80}
      width={300}
    >
      {Row}
    </List>
  );
}
 
export default Windowing;