import { useState } from "react";
import "./bookcreate.css";
const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("title");
  const [des, setDes] = useState("Description");
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reps = await onCreate({
      title,
      des,
    });
  };
  return (
    <div className="form-create">
      <h3>Add a book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          onChange={handleChangeTitle}
          type="text"
          id="title"
          name="title"
        />
        <input onChange={handleChangeDes} type="text" id="des" name="des" />
        <input type="submit" value="Create!" />
      </form>
    </div>
  );
};

export default BookCreate;
