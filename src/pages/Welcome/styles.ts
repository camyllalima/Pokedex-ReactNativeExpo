import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: #f2cb55;
  `}
`;

export const Bottom = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 30%;
    background-color: #fff;
    opacity: 0.9;
    padding: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;

    justify-content: center;
    align-items: center;
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    height: 70%;
    align-items:center
    justify-content: center;
  `}
`;

export const WrapperIcon = styled.View`
  ${({ theme }) => css`
    width: 200px;
    height: 300px;
    background-color: #fd7d24;
    border-radius: 100px;
    transform: rotate(30deg);
    align-items: center;
    justify-content: center;
  `}
`;

export const IconContent = styled.View`
  width: 200px;
  height: 300px;
  transform: rotate(-30deg);
`;

export const AnimatedLottieView = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 200;
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    border-radius: 70px;
    background-color: #fd7d24;
    justify-content: center;
    align-items: center;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: #fff;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-size: 40px;
    margin-top: 20px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-size: 14px;
  `}
`;
