import styled from "styled-components";

export const InputWrap = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  position: relative;

  background-color: ${props => props.theme.colors.background};
  border-radius: ${props => props.theme.borderRadius.medium};

  @media (max-width: 992px) {
    margin-top: 10px;
  }
`;

export const InputForm = styled.form`
  margin: 0 15px;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputField = styled.input`
  width: 100%;

  background-color: ${props => props.theme.colors.background};
  border: none;
  outline: none;

  font-size: ${props => props.theme.fontSize.small};
  color: ${props => props.theme.colors.text};
  font-family: ${props => props.theme.font.bold};
`;

export const CityList = styled.div`
  padding: 10px 0;

  width: 100%;
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50px;
  z-index: 2;
`;