import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Product name="laptop" price="10000"></Product>
      <Product name="mobile" price="20000"></Product>
      <Product name="Watch" price="30000"></Product>
      <Product name="headphone" price="40000"></Product> */}
      {/* <Count></Count> */}
      <Users></Users>
    </div>
  );
}

// function Product(props) {
//   return (
//     <div className='product'>
//       <h3>Name : {props.name}</h3>
//       <p>Price : {props.price}</p>
//     </div>
//   );
// }



// function Count() {
//   const [count, setCount] = useState(0);
//   const increase = () => {
//     setCount(count + 1)
//   }
//   const decrease = () => {
//     if (count > 0) {
//       setCount(count - 1)
//     }
//   }
//   return (
//     <div>
//       <h3>Count : {count}</h3>
//       <button onClick={increase}>increase</button>
//       <button onClick={decrease}>decrease</button>
//     </div>
//   );
// }

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>External User</h2>
      {
        users.map(user => <Person name={user.name} key={user.id}></Person>)
      }
    </div>
  )
}

function Person(props) {
  console.log(props)
  return (
    <div>
      <h1>userName : {props.name}</h1>
    </div>
  )
}

export default App;
