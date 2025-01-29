import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 2.5rem;

  h1 {
    align-self: center;
  }

  & > div {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin-top: 2.5rem;
  }

  span {
    margin-left: 2rem;
    font-family: "Lato", serif;
    font-size: 2.5rem;
  }
`;

export const Container = styled.div`
  position: relative;
`;

export const Pic = styled.img`
  border-radius: 10px;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transform: translateX(10px);
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out,
    visibility 0.2s;
  border-radius: 7.5px;

  ${Container}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  width: 4rem;
  height: 4rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

const float = keyframes`
 0% {
  opacity: 0;
    transform: translateX(-900px);
  }

  50%{
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 1;
    transform: translateX(900px);
  }
`;

export const FirstDot = styled.div`
  opacity: 0;
  animation: ${float} 3s ease infinite;
  animation-delay: 0.6s;
`;
export const SecondDot = styled.div`
  opacity: 0;
  animation: ${float} 3s ease infinite;
  animation-delay: 0.4s;
`;
export const ThirdDot = styled.div`
  opacity: 0;
  animation: ${float} 3s ease infinite;
  animation-delay: 0.2s;
`;
export const ForthDot = styled.div`
  opacity: 0;
  animation: ${float} 3s ease infinite;
  animation-delay: 0s;
`;

export const LoaderContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  & > div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: gray;
  }
`;
