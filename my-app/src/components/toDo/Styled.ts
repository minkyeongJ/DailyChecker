import styled from "styled-components";

export const LiStyle = styled.li`
  background-color: #ffffff;
  padding: 16px;
  border: 1px solid #dddddd;
  border-radius: 8px;
`;
export const ButtonArea = styled.div`
  text-align: right;
`
const ButtonStyle = styled.button`
  border-radius: 8px;
  border: none;
  padding: 5px 8px;
  font-weight: bold;
  margin: 10px 5px 0;
`;
export const DoingButton = styled(ButtonStyle)`
  background-color: #c7daff;
  color: #4B576D;
`;
export const ToDoButton = styled(ButtonStyle)`
  background-color: #fff4cd;
  color: #dd9200;
`;
export const DoneButton = styled(ButtonStyle)`
  background-color: #fbe2ff;
  color: #CC00B8;
`;
