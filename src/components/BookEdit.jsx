import { useState } from "react";

const BookEdit = ({ book, onEdit }) => {
  const [title, setTitle] = useState(book.title);
  const [des, setDes] = useState(book.des);
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDes = (e) => {
    setDes(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onEdit(book.id, {
      title,
      des,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Title</label>
        <input
          onChange={handleChangeTitle}
          type="text"
          id="title"
          name="title"
          value={title}
        />
        <input
          onChange={handleChangeDes}
          value={des}
          type="text"
          id="des"
          name="des"
        />
        <input type="submit" value="edit" />
        <button>cancel</button>
      </form>
    </div>
  );
};

export default BookEdit;
