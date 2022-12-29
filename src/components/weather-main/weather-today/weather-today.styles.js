import styled from "styled-components";
import {theme} from "../../../constants/theme";

export const SectionWrap = styled.div`
  margin: 10px 0 0 0;
  width: 100%;
  height: 265px;

  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};

  @media (max-width: 992px) {
    height: 231px;
  }
`;

export const PlainText = styled.p`
  margin: 20px;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.grey};
  font-family: ${props => props.theme.font.bold};
`;