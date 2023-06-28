import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  children: ReactNode
  action?: () => any
}

export function Button(props: ButtonProps) {
  return (
    <ButtonContainer
      onClick={() => {
        props.action && props.action()
      }}
    >
      {props.children}
    </ButtonContainer>
  )
}
