import styled, { createGlobalStyle } from 'styled-components'

/**
 * Ce fichier contient l'intégralité de nos composants stylisés.
 * Vous retrouverez tout le css de l'application en dessous :
 *
 */



//// style global : style des balises HTML nues ( sans classe )
export const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
    }

    h1 {
        font-family: 'Lobster', sans-serif;
    }
`

///////////////////////////////
//// Les gabarits
///////////////////////////////
export const AppContainer = styled.main`
display: flex;
flex-direction: column;
box-sizing: border-box;
min-width: 100vw;
min-height: 100vh;
align-items: stretch;



`




export const MyParagraph = styled.p`
  text-align: center;
  color: #a93535;
`
