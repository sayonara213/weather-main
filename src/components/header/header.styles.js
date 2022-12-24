import styled from "styled-components";
import {theme} from "../../const/theme";


export const HeaderWrap = styled.div`
    width: 80px;
    height: 896px;
  
    display: flex;
    align-items: center;
    justify-content: center;
  
    background-color: ${theme.colors.background};
    border-radius: ${theme.borderRadius.medium};
`;

export const HeaderText = styled.h1`
`;