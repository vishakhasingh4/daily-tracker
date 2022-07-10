import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  align-items: baseline;
  border-bottom: 1px solid #777;

  p {
    font-size: 16px;
  }

  @media only screen and (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const StyledHeader = styled.h1`
  color: #ef4815;
  font-size: 25px;
`;

export const AccountDetails = styled.div`
  display: flex;
  cursor: pointer;

  span {
    margin: 16px 5px 0 5px;
  }
`;
