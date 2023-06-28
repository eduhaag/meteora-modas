import styled from 'styled-components'

interface BannerProps {
  image: string
}

export const BannerContainer = styled.div<BannerProps>`
  height: 25.937rem;
  background: ${(props) => `url(${props.image})`} no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 0 2.812rem 1.625rem;

  .navigators {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`
