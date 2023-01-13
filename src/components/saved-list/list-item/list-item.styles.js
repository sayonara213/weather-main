import styled from "styled-components";

export const ListItemWrap = styled.div`
  position: relative;
  
  margin-bottom: 10px;
  
  width: 100%;
  height: 150px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  
  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
`

export const ListTextWrap = styled.div``

export const ListTempWrap = styled.div``

export const ListIcon = styled.img`
  margin: 0 30px;
  
  object-fit: contain;
  max-width: 120px;
  height: 120px;
  
  @media (max-width: 992px) {
    margin: 0 10px;
  }
`
export const ListButton = styled.img`
  width: 20px;
  height: 20px;
  
  position: absolute;
  top: 15px;
  right: 15px;
`;
