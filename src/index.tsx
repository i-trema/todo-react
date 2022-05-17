// on importe la librairie react

import React from 'react'

// on importe la lib react-dom pour afficher react sur la page
import { createRoot } from 'react-dom/client'
// on importe le composant App ( le composant qui contiendra toute notre application )
import App from './App'


const name = 'John Doe'
const id = 'ma-super-div'
const notes: Array<number> = [12, 10, 9, 16, 20]
const age: number = 19

//// on crée un élément react (JSX), avec un "fragment" <> </> (balise vide)
//// pour mettre plusieurs balises dans le même élément... : 
// const element: JSX.Element = (
//   <div className="test" id={`${name}-${id}`}>
//     <h1> Salut {name} </h1>
//     <p> Voilà React</p>
//     <h2>Vos notes</h2>
//     <p>{age >= 18 ? 'vous êtes majeur' : 'vous êtes mineur'}</p>
//     <ul>
//       {notes.map((note, i) => (
//         <li key={`note-${i}`}>{note}/20</li>
//       ))}
//     </ul>
//   </div>
// )

// ici on définit un type d'objet pour définir nos "props"
type HelloProps = {
  name: string
  age?: string // on rend un attribut facultatif avec le "?"
}

// on définit le composant, avec les attributs ( grâce à la destructuration ) qui s'appellent les "props"
// on peut définir une valeur par défaut pour une props avec le "="
function Hello({ name, age = 'XX' }: HelloProps): JSX.Element {
  return (
    <p>
      Hello {name}, vous avez {age} ans.
    </p>
  )
}

type BigTextProps = {
  children: React.ReactNode
}

// ici on définit un autre composant avec des "children"....
function BigText({ children }: BigTextProps): JSX.Element {
  return <h3>{children}</h3>
}

// on appelle le composant avec la balise qui porte son nom, et on définit les props dans la balise...
// et entre les balises ouvrantes et fermantes d'un composant, on définit les "children"
const element: JSX.Element = (
  <div>
    <BigText>Voilà les children du composant BigText</BigText>
    <Hello name="Joe" />
    <Hello name="John" age="31" />
    <Hello name="Charles" age="35" />
    <Hello name="Julius" age="55" />
  </div>
)

// on récupère la balise div #root de notre html
const root = document.querySelector('#root')

// si il n'y a pas de balise root
if (!root) {
  throw new Error('Oups il manque la balise root')
}

// j'affiche l'élément dans la balise div #root
createRoot(root).render(<App />)
