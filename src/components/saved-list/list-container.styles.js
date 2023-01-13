import styled from "styled-components";

export const ListWrap = styled.div`
  margin: 0 0 0 10px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  @media (max-width: 992px) {
    margin: 10px 0 0 0;
  }
`;

export const DummyWrap = styled.div`
  width: 100%;
  height: 150px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};
`;

export const DummyText = styled.p`
  font-size: ${props => props.theme.fontSize.large};
  font-family: ${props => props.theme.font.bold};
  color: ${props => props.theme.colors.text};
  
  text-align: center;
`;