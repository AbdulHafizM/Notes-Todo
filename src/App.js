import './App.css';
import {useState, createContext} from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Root from './root'
import Note from './Note';
import Todo from './Todo';
import CreateNote from './createNote';
import DisplayNote from './displayNote';
import Modal from './components/Modal';

export const modalContext = createContext()

function App() {
  const [isOpen, setIsOpen] = useState(false)
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index path='/' element={<Note />}/>
        <Route path='/todo' element={<Todo />} />
        <Route path='/create-note' element={<CreateNote />} />
        <Route path='/note/:id' element={<DisplayNote />} />
        <Route path="*" element={<h1>Route does not exist</h1>} />
      </Route>
    )
  )
  return (
    <modalContext.Provider value={{isOpen, setIsOpen}}>
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
    </modalContext.Provider>
  );
}

export default App;
