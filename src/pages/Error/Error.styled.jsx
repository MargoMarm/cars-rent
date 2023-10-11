import styled from "@emotion/styled";
import { colors } from "utils";

export const Title = styled.span`
  margin-bottom: 14px;

  color: ${colors.textMain};

  font-size: 120px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.66px;
`;

export const Text = styled.span`
  margin-bottom: 28px;
  width: 520px;
  color: ${colors.textMain};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;