import styled from "styled-components";

export const Heading = styled.p`
  font-size: 20px;
  margin: 5px;
  font-weight: bold;
  color: #3596e7;
  margin-left: 15px;
`;

export const Title = styled.p`
  font-size: 15px;
  color: #000;
  margin-top: 20px;
  margin-left: 20px;
  font-weight: bold;
  color: gray;
  &:hover {
    color: #3596e7;
    transition: 200ms ease-in;
  }
`;

export const Text = styled.p`
  margin: 5px;
  font-size: 12px;
  color: #000;
  margin-left: 15px;
  font-weight: bold;
  color: gray;
  &:hover {
    color: #3596e7;
    transition: 200ms ease-in;
  }
`;
