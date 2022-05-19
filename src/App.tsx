import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import { GlobalStyle } from './shared/ui'
import Subscription from './subscription/Subscription'
import TodoList from './todo-list/TodoList'

/**
 * ce fichier contient le composant principal
 * qui contient toute l'application.
 */

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liste/:id" element={<TodoList />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
