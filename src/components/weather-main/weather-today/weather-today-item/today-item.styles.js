import styled from "styled-components";
import {theme} from "../../../../const/theme";

export const TodayItemWrap = styled.div`
    margin-bottom: 30px;
  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  
    border-right: 1px solid ${props => props.theme.colors.border};
    margin-right: -2px;
`;

export const TodayTime = styled.p`
  margin: 0;
  
  font-size: ${props => props.theme.fontSize.medium};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.grey};
`;

export const TodayIcon = styled.img`
    margin: 10px 0;
    object-fit: contain;
    width: 75px;
`;

export const TodayTemp = styled.p`
  margin: 0;
  font-size: ${props => props.theme.fontSize.large};
  font-weight: ${props => props.theme.fontWeight.bold};
  color: ${props => props.theme.colors.text};
`;