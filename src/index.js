import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: "Привет мир",
// });

// console.log(element);

// ReactDOM.createRoot(document.querySelector('#root')).render(Element);

// const Elem1 = <span>Hello</span>;
// const Elem2 = <span>world</span>;
// const Elem = (
//   <div>
//     {Elem1}
//     {Elem2}
//   </div>
// );

// console.log(Elem);


ReactDOM.createRoot(document.querySelector("#root")).render(<App />);

// import './index.css';

// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
