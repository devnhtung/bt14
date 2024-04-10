import BookEdit from "./BookEdit";
import { useState } from "react";
const BookShow = ({ book, onDelete, onEdit }) => {
  const image = `https://picsum.photos/seed/${book.id}/200/300`;
  const [isEdit, setIsEdit] = useState(false);
  const handleEdit = (id, term) => {
    onEdit(id, term);
    setIsEdit(false);
  };
  return (
    <div className="item">
      <div className="image">
        <img src={image} alt="" />
      </div>
      {!isEdit && (
        <>
          <h2>{book.title}</h2>
          <p>{book.des}</p>
        </>
      )}
      {isEdit && <BookEdit book={book} onEdit={handleEdit} />}
      {!isEdit && (
        <>
          <button onClick={() => onDelete(book.id)}>delete</button>
          <button onClick={() => setIsEdit(!isEdit)}>edit</button>
        </>
      )}
    </div>
  );
};

export default BookShow;
