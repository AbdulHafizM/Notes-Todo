import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Root from './root'
import Note from './Note';
import Todo from './Todo';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index path='/' element={<Note />}/>
        <Route path='/todo' element={<Todo />} />
      </Route>
    )
  )
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
