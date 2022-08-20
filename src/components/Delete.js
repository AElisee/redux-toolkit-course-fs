import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePicture } from "../app/feacture/pictures.slice";

const Delete = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    axios.delete("http://localhost:5001/pictures/" + id).then(() => {
      dispatch(deletePicture(id));
    });
  };
  return (
    <div className="delete-icon" onClick={() => handleDelete()}>
      <AiOutlineDelete />
    </div>
  );
};

export default Delete;
