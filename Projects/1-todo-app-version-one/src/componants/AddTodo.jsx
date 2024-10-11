export function AddTodo() {
    return  <div class="container text-center">
    <div class="row kg-row">
    <div class="col-6">
      <input type="text" placeholder="Enter todo here" class="form-control" />
    </div>
    <div class="col-4">
      <input type="date" class="form-control"/>
    </div>
    <div class="col-1">
    <button type="button" class="btn btn-outline-success kg-btn">Add</button>
    </div>
  </div>
  </div>
}