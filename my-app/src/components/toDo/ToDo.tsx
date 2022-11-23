import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../../atoms";
import * as S from "./Styled";

export default function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      console.log(oldToDo, newToDo);
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <>
      <S.LiStyle>
        <p>{text}</p>
        <S.ButtonArea>
          {category !== "DOING" && (
            <S.DoingButton name="DOING" onClick={onClick}>
              Doing
            </S.DoingButton>
          )}
          {category !== "TO_DO" && (
            <S.ToDoButton name="TO_DO" onClick={onClick}>
              To Do
            </S.ToDoButton>
          )}
          {category !== "DONE" && (
            <S.DoneButton name="DONE" onClick={onClick}>
              Done
            </S.DoneButton>
          )}
        </S.ButtonArea>
      </S.LiStyle>
    </>
  );
}
