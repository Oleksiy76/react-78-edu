import React, { Component } from "react";
import { PageTitle } from "./PageTitle/PageTitle";
import { EventBoard } from "./EventBoard/EventBoard";
import upcomingEvents from "user.json";
// import React from "react";
import Counter from "./Counter";
import Dropdown from "./Dropdown/Dropdown";
import Todolist from "./Todolist";
import Form from "./Form";

export class App extends Component {
  state = {
    todos: [
      { id: "id-1", text: "React", completed: true },
      { id: "id-2", text: "React Router", completed: false },
      { id: "id-3", text: "React Native", completed: false },
    ],
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        {/* <PageTitle text="24th Core Worlds Coal Conference" />
        <EventBoard events={upcomingEvents} /> */}

        <Form onSubmit={this.formSubmitHandler} />

        <h1>Компонент</h1>

        <Counter initialValue={12} />

        <Dropdown />

        <div>
          <p>Общее кол-во: {totalTodoCount}</p>
          <p>Кол-во выполненных: {completedTodoCount} </p>
        </div>

        <Todolist todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

// export default App;

// export const App = () => {
//   return (
//     <>
//       <PageTitle text="24th Core Worlds Coal Conference" />
//       <EventBoard events={upcomingEvents} />

//       <h1>Компонент</h1>

//       <Counter initialValue={12} />

//       <Dropdown />

//       <Todolist />
//     </>
//   );
// };
