import styled from 'styled-components'

interface RadioProps {
  color: string
}

export const RadioContainer = styled.div<RadioProps>`
  input[type='radio'] {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    column-gap: 20px;
    flex-direction: column;
    gap: 0.812rem;
  }

  .custom-radio {
    border: 1px solid ${(props) => props.theme['gray-100']};
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .custom-radio,
  span {
    font-size: 0.812rem;
  }

  .custom-radio span {
    content: '';
    width: 16px;
    height: 16px;
    background: ${(props) => props.color};
    border-radius: 50%;
  }

  input[type='radio']:checked + .custom-radio span {
    border: 3px solid ${(props) => props.theme.purple};
  }
`
