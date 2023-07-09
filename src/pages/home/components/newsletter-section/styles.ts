import styled from 'styled-components'
import { mediaQueries } from '../../../../styles/themes/media-queries'

export const NewsLetterContainer = styled.section`
  padding: 1.625rem;

  @media (min-width: ${mediaQueries.TABLET}) {
    padding: 2.5rem;
  }

  @media (min-width: ${mediaQueries.DESKTOP}) {
    padding: 4.125rem 22.25rem;
  }
`

export const NewsLetterBox = styled.div`
  margin: auto;
  border: 1px solid ${(props) => props.theme.black};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  p {
    text-align: center;
    line-height: 1.475rem;
  }

  @media (min-width: ${mediaQueries.TABLET}) {
    padding: 2.5rem;

    p {
      font-size: 1.25rem;
    }
  }
`

export const NewsLetterForm = styled.form`
  display: flex;

  input {
    border: 1px solid ${(props) => props.theme.black};
    border-right: 0;
    padding: 0.5rem 0 0.5rem 1rem;
    width: 100%;
  }

  @media (min-width: ${mediaQueries.TABLET}) {
    input {
      width: 22.31rem;
    }
  }

  @media (min-width: ${mediaQueries.DESKTOP}) {
    input {
      width: 28.5rem;
    }
  }
`
