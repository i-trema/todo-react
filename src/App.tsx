import { GlobalStyle } from './shared/ui'
import TodoList from './todo-list/TodoList'

/**
 * ce fichier contient le composant principal
 * qui contient toute l'application.
 */

export default function App() {
  return (
    <>
      <GlobalStyle />
      <TodoList />
    </>
  )
}
