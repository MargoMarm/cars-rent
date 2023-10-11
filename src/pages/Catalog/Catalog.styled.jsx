import styled from "@emotion/styled";
import { colors } from "utils";

export const PageWrapper = styled.div`
  padding-right: 91px;
  padding-left: 163px;
  padding-top: 70px;
  padding-bottom: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const EmptyText = styled.p`
font-weight: 600;
font-size:32px;
color: ${colors.textMain};
text-align: center;
`