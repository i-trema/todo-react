import { useEffect, useState } from 'react'
import * as Ui from '../shared/ui'
import PubSub from 'pubsub-js'

type ProfileProps = {
  open?: boolean
  onClose: () => void
}

export default function Profile({ open, onClose }: ProfileProps) {
    const [username, setUsername] = useState<string>('')
    useEffect(() => {
        const storeUser = localStorage.getItem('user')
    
        console.log('Coucou')
    
        if (storeUser) {
          setUsername(JSON.parse(storeUser).displayName)
        }
      }, []) 
    //// -> on met un tableau vide [] pour que l'effet ne se produise qu'une fois ( effet d'initialisation)

      useEffect(() => {
        console.log('publication de changeUsername : ' + username);
        //// on met les modifs de "username" dans le topic 'changeUsername', 
        //// on pourra les récupérer en faisant un "subscribe" sur le meme topic
        PubSub.publish('changeUsername', username)
      }, [username])

      const changeUsername = (e: React.SyntheticEvent<HTMLInputElement>) => {
        setUsername(e.currentTarget.value)
      }

  return (
    <Ui.GreenRightFrame open={open}>
      <Ui.GreenFrameHeader>
        <Ui.GreenFrameClose
          className="fa-solid fa-circle-xmark"
          onClick={onClose}
        ></Ui.GreenFrameClose>
        <Ui.GreenFrameTitle>Mon Profil</Ui.GreenFrameTitle>
      </Ui.GreenFrameHeader>
      <Ui.AppContainer>
        <Ui.InputContainer display="white">
          <Ui.Input
            type="text"
            display="white"
            placeholder="Votre nom d'utilisateur"
            value={username}
            onChange={changeUsername}
          ></Ui.Input>
        </Ui.InputContainer>
      </Ui.AppContainer>
    </Ui.GreenRightFrame>
  )
}