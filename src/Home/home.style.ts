import styled, { css } from "styled-components";

const HomeWrapper = styled.div`
  ${() => css`
    &.home-component {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;

      p{
        width: 50%;
      }
    }
  `}
`;

export default HomeWrapper;
