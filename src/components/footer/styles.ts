import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.black};
  text-align: center;
  color: ${(props) => props.theme.white};
  font-size: 0.812rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
`
