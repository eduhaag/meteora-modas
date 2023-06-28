import styled from 'styled-components'

export const ButtonContainer = styled.button`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.purple};
  border: 0;
  font-weight: 500;
  padding: 0.56rem 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`
