import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteUser } from "../store/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearAllUser = () => {
    console.log("Delete");
   dispatch(deleteUser());
  }

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={clearAllUser}>
        clear all users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

export default DeleteAllUser;
