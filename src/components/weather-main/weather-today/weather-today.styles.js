import styled from "styled-components";
import {theme} from "../../../const/theme";

export const SectionWrap = styled.div`
  margin: 10px 0 0 0;
  width: 100%;
  
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
`;

export const PlainText = styled.p`
  margin: 20px;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.grey};

`;