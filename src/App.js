import Painting from "./components/Painting";

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
        quantity={data.quantity}
      />
    </div>
  );
}

// class Counter extends React.Component {
//   handleIncrement = () => {
//     console.log("Кликнули в увеличить");
//     console.log(this);
//   };

//   handleDecrement = () => {
//     console.log("Кликнули в уменьшить");
//   };

//   render() {
//     return (
//       <div className="Counter">
//         <span className="Counter_value">0</span>

//         <div className="Counter_controls">
//           <button type="button" onClick={this.handleIncrement}>
//             Увеличить на 1
//           </button>
//           <button
//             type="button"
//             onClick={() => {
//               console.log("Клик-");
//               this.handleIncrement;
//             }}
//           >
//             Уменьшить на 1
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
