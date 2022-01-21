import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
 
axios.get(url).then((response) => { 
  const todo = response.data;
  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
    The todo with ID: ${ID}
    Has a title with ${title}
    Is it completed? ${completed}
  `)
})