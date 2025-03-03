import React from "react";

const TodoItem1 = () => {
  let todoName = "Go To College";
  let date = "12/12/24";
  return (
    <div>
      <div class="row">
        <div class="col-6">
          <h5>{todoName}</h5>
        </div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
