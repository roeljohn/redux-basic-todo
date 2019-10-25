// Fetch All Todo
export const fetchAllTodos = () => {
    return (dispatch) => {
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch(
                { type: "FetchData", todos: json }
                ))
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }
  }

  // Fetch Todo By ID
  export const fetchTodoById = (id) => {
    return (dispatch) => {
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(json => dispatch(
                { type: "FetchTodoById", todo: json }
                ))
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }
  }