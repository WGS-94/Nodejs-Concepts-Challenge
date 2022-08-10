const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const userExists  = users.find(user => user.username === username);
  
  if(!userExists ) {
    return response.status(400).json({ error: "User not found!" });
  }

  request.user = userExists;

  return next();
}

app.post('/users', (request, response) => {
  
  const { name, username } = request.body;

  const userAlreadyExists = users.some((user) => user.username === username);

  if(userAlreadyExists) {
    return response.status(400).json({ error: "User already exists!" });
  }

  const newUser = {
    id: uuidv4(),
    name,
    username,
    todos: []
  }

  users.push(newUser);

  return response.status(201).json({ message: "User created with success!" });
});

app.get("/users", checksExistsUserAccount, (request, response) => {
  
  const { user } = request;

  return response.json(user);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  
  const { user } = request;

  return response.json(user.todos);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  
  const { title, deadline } = request.body;
  const { user } = request;

  const newTodo = {
    id: uuidv4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  }

  user.todos.push(newTodo);

  return response.status(201).json(newTodo);
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {

  const { title, deadline } = request.body;
  const { id } = request.params;
  const { user } = request;

  const todoExists = user.todos.find(todo => todo.id === id);

  if (!todoExists) {
    return res.status(404).json({ message: "Todo not found!"});
  }

  todoExists.title = title ? title : todoExists.title;
  todoExists.deadline = deadline ? new Date(deadline) : todoExists.deadline;

  return response.status(201).json(todoExists);

});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  
  const { id } = request.params;
  const { user } = request;

  const todoExists = user.todos.find(todo => todo.id === id);

  if (!todoExists) {
    return res.status(404).json({ message: "Todo not found!"});
  }

  todoExists.done = true;

  return response.status(201).json(todoExists);
 
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  
  const { id } = request.params;
  const { user } = request;

  const todoExists = user.todos.find(todo => todo.id === id);

  if (!todoExists) {
    return res.status(404).json({ message: "Todo doesn't exists"});
  }

  user.todos.splice(todoExists, 1);

  return response.status(200).json({message: "Excluido com sucesso!"});
  
});

module.exports = app;