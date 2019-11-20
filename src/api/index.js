// Fetch All Todo
export const fetchAllTodos = () => {
    return (dispatch) => {
        return fetch('https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos')
            .then(response => response.json())
            .then(json => dispatch(
                { type: "FetchData", todos: json }
                ))
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }
}

export const completeTodo = (id) => {
    return (dispatch) => {
        return fetch(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${id}`, {
            method: 'put',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({id: id, completed: true})
          }).then(response => response.json())
            .then(json => dispatch(
                { type: "COMPLETE_TODO", id }
                ))
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }
}

export const incompleteTodo = (id) => {
    return (dispatch) => {
        return fetch(`https://5cea41c50c871100140bf437.mockapi.io/api/v1/todos/${id}`, {
            method: 'put',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({id: id, completed: false})
          }).then(response => response.json())
            .then(json => dispatch(
                { type: "COMPLETE_TODO", id }
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