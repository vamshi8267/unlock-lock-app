// Write your code here
import {useState} from 'react'

import {
  UnlockContainer,
  ImageContainer,
  Image,
  Heading,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [locked, setUnlock] = useState(true)

  const onClickButton = () => {
    setUnlock(prevState => !prevState.locked)
  }

  return locked ? (
    <UnlockContainer>
      <ImageContainer>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
          alt="lock"
        />
        <Heading>Your Device is Locked</Heading>
      </ImageContainer>
      <Button type="button" onClick={onClickButton}>
        {locked ? 'Unlock' : 'Lock'}
      </Button>
    </UnlockContainer>
  ) : (
    <UnlockContainer>
      <ImageContainer>
        <Image
          src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
          alt="unlock"
        />
        <Heading>Your Device is Unlocked</Heading>
      </ImageContainer>
      <Button type="button" onClick={onClickButton}>
        {locked ? 'Lock' : 'Unlock'}
      </Button>
    </UnlockContainer>
  )
}

export default Unlock
