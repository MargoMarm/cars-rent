import styled from "@emotion/styled";

export const PageWrapper = styled.div`
padding-right:58px;
padding-left: 163px;
padding-top: 70px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 29px;
  grid-row-gap: 50px;

  width: 635px;
`;
