import styled from "styled-components";
import {theme} from "../../../../const/theme";

export const CityWrap = styled.div`
  padding: 0 15px;
  
  width: 50%;
  height: 50px;
  display: flex;
  align-items: center;
  
  background-color: ${props => props.theme.colors.background};
  overflow: hidden;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${props => props.theme.colors.grey};
  }
  
  cursor: pointer;
  
  &:first-child {
    border-radius: ${props => props.theme.borderRadius.medium} ${props => props.theme.borderRadius.medium} 0 0;
  }
  &:last-child {
    border-radius: 0 0 ${props => props.theme.borderRadius.medium} ${props => props.theme.borderRadius.medium};
  }
  
`;

export const CityText = styled.p`
  margin: 0 15px;
  color: ${props => props.theme.colors.text};
  user-select: none;
`;
