import styled from 'styled-components'

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }
  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }
  .remove {
    color: #ff000d;
    margin-top: 20px;
    background-color: transparent;
    border: none;
    &:hover {
      color: #ff000d60;
    }
  }
  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`
