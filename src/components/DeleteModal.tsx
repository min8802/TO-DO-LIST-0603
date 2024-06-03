import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
  } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction } from "react";

interface DeleteModalProps {
    isOpen: boolean;
    onClose: () => void;
    todos: ITodo[];
    todo: ITodo;
    setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

  const DeleteModal: FC<DeleteModalProps> = ({isOpen, onClose, todos, todo, setTodos}) => {

    const onClickDelete = () => {
        const temp = todos.filter((v) => {
            if(v.id !== todo.id ) {
                return v;
            }
        })
        setTodos(temp);

        localStorage.setItem("savedTodos", JSON.stringify(temp));
    }

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>삭제 하시겠습니까?</ModalBody>
  
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClickDelete}>
              삭제
            </Button>
            <Button variant="ghost" onClick={onClose}>닫기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };
  
  export default DeleteModal;