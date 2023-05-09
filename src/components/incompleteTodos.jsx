import React from "react";

export const IncompleteTodos = (props) => {
  const { Todos, OnClickComplete, OnClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {Todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => OnClickComplete(index)}>完了</button>
              <button onClick={() => OnClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
