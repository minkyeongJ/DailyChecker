import styled from "styled-components";

export const Position = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  @media screen and (max-width: 1000px) {
    position: static;
    top: auto;
    left: auto;
    transform: none;
  }
`;
export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  margin: 30px 0 50px;
`;
export const ToDoWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    width: auto;
    margin: 0 30px;
  }
`;
export const ToDoArea = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;
export const ToDoCard = styled.section`
  min-height: 300px;
  background-color: #f3f4f4;
  color: black;
  border-radius: 12px;
  padding: 16px;
  flex-basis: 350px;
  @media screen and (max-width: 1000px) {
    min-height: 200px;
    margin-bottom: 10px;
  }
`;
export const CardTitle = styled.h2`
  font-weight: 600;
  font-size: 16px;
  padding-bottom: 10px;
`;
export const UlStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  `;