import styled from "styled-components";
import {theme} from "../../../constants/theme";

export const AirWrap = styled.div`
  margin: 0 200px 0 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextWrap = styled.div`

`;

export const AirTextBig = styled.h1`
  margin: 20px 0;
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.font.bold};

  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.bold};
`;

export const AirTextSmall = styled.p`
  margin-bottom: 56px;
  color: ${props => props.theme.colors.grey};
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.font.bold};
  font-size: ${props => props.theme.fontSize.large};
  font-weight: ${props => props.theme.fontWeight.bold};
`;