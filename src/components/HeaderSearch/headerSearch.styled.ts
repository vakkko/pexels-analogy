import styled from "styled-components";

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url("/images/pexels-background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 35rem;
  padding-top: 9rem;
  background-position: 20%;
  background-blend-mode: overlay;
`;

export const Logo = styled.span`
  font-size: 4rem;
  color: white;
  font-weight: 700;
`;

export const SearchInput = styled.input`
  padding: 1.2rem 7.5rem 1.2rem 4rem;
  width: 100%;
  font-size: 14px;
  line-height: 18px;
  color: #575756;
  background-color: transparent;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: 18px 18px;
  background-position: 95% center;
  border-radius: 50px;
  border: 1px solid #575756;
  transition: all 250ms ease-in-out;
  backface-visibility: hidden;
  transform-style: preserve-3d;

  &::placeholder {
    color: color(#575756 a(0.8));
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  &:hover,
  &:focus {
    padding: 1.2rem 5rem 1.2rem 2rem;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #575756;
    border-radius: 0;
    background-position: 100% center;
  }
`;

export const Button = styled.button`
  border: 1px solid white;
  background-color: #5d3b63;
  border-radius: 15px;
  padding: 1.2rem 1.5rem;
  margin-left: 1rem;
  color: white;
  cursor: pointer;
`;
