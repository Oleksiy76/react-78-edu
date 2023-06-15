import PaintingList from "./components/PaintingList";
import Section from "./components/Section";

const paintings = [
  {
    id: "id-1",
    url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 500,
    title: "Tacos With Lime",
    author: {
      tag: "rainbow",
      url: "https://pixabay.com",
    },
    quantity: 10,
  },
  {
    id: "id-2",
    url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640",
    price: 510,
    title: "Fries and Burger",
    author: {
      tag: "sun",
      url: "https://pixabay.com",
    },
    quantity: 15,
  },
  {
    id: "id-3",
    url: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
    price: 450,
    title: "Tacos",
    author: {
      tag: "sky",
      url: "https://pixabay.com",
    },
    quantity: 6,
  },
];

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section>
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
