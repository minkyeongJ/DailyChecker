import { useRecoilValue } from "recoil";
import { toDoSelector } from "../../atoms";
import CreateToDo from "../../components/createToDo/CreateToDo";
import ToDo from "../../components/toDo/ToDo";
import * as S from "./Styled"

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <S.Position>
      <S.Title>Daily Checker</S.Title>
      <S.ToDoWrap>
        <CreateToDo />
        <S.ToDoArea>
          <S.ToDoCard>
            <S.CardTitle>To Do</S.CardTitle>
            <S.UlStyle>
              {toDo.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
              ))}
            </S.UlStyle>
          </S.ToDoCard>
          <S.ToDoCard>
            <S.CardTitle>In Progress</S.CardTitle>
            <S.UlStyle>
              {doing.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
              ))}
            </S.UlStyle>
          </S.ToDoCard>
          <S.ToDoCard>
            <S.CardTitle>Done</S.CardTitle>
            <S.UlStyle>
              {done.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
              ))}
            </S.UlStyle>
          </S.ToDoCard>
        </S.ToDoArea>
      </S.ToDoWrap>
    </S.Position>
  );
}

export default ToDoList;
