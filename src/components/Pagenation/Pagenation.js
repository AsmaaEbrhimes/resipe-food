import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

const Pgenation = () => {
    return (
        <>
            <Pagination className='justify-content-center mt-2' size="sm">{items}</Pagination>
        </>
    )
}
export default Pgenation