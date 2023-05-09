import React from "react";

export const CompleteTodos = (props) => {
  const { Todos, OnClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {Todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => OnClickBack(index)}>もどす</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
