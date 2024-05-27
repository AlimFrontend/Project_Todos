import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../Ui/Button";

function TodosActions({ resetTodo, deleteCompletedTodos, completedTodos }) {
  return (
    <>
      <Button title="Reset ALL todos" onClick={resetTodo}>
        <RiRefreshLine onClick={resetTodo} />
      </Button>
      <Button
        title="Reset COMPLITED todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodos}
      >
        <RiDeleteBin2Line onClick={deleteCompletedTodos} />
      </Button>
    </>
  );
}

export default TodosActions;
