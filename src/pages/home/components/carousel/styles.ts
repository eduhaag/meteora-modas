import styled from 'styled-components'

export const NavigateButton = styled.button`
  position: absolute;
  z-index: 2;
  top: calc(50% - 15px);
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;

  border: 0;
  background-color: transparent;
`

export const Indicator = styled.li`
  background-color: ${(props) => props.theme.white};
  width: 1.87rem;
  height: 0.1875rem;
  display: inline-block;
  margin: 0 0.375rem 1rem;
`
