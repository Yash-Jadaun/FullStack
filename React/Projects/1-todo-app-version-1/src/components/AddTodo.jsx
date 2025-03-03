import React from 'react'

const AddTodo = () => {
  return (
    <span>
        <div class="row">
            <div class="col-6">
              <input type="text" placeholder="Enter Task" />
            </div>
            <div class="col-4">
              <input type="text" placeholder="dd/mm/yyyy" />
            </div>
            <div class="col-2">
              <button type="button" class="btn btn-success">
                Add
              </button>
            </div>
          </div>
    </span>
  )
}

export default AddTodo
