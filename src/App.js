import Painting from "./components/Painting"

const data = {
  url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  price: 500,
  title: "Tacos With Lime",
  author: {
    tag: "rainbow",
    url: "https://pixabay.com",
  },
  quantity: 10,
};

export default function App() {
  return (
    <div>
      <Painting
        url={data.url}
        title={data.title}
        price={data.price}
        authorName={data.author.tag}
        quantity = {data.quantity}
      />
    </div>
  );
}




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
