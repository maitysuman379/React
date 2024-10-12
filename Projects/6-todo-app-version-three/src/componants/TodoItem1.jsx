export function Item1(){

  let todoName = 'milk';
  let todoDate = '4/10/2023';

    return <div class="container">
    <div class="row kg-row">
      <div class="col-6">
        { todoName }
      </div>
      <div class="col-4">
        { todoDate }
      </div>
      <div class="col-2">
      <button type="button" class="btn btn-outline-danger kg-btn">Delete</button>
      </div>
    </div>
    </div>
}