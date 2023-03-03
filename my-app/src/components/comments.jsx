/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from "react";
import Axios from "axios";

export function Comments() {
  const [comments, setCommets] = useState("Comentarios");
  const [messageState, setMessage] = useState()

  const fetchData = () => {
    Axios.get(`https://nestjstuits.onrender.com/tuits`).then(async (res) => {
      let comments = await res.data;

      setCommets(comments.map((elemento) => <h6 className="comment">{elemento.message}</h6>));
    });
  };
  fetchData();

  const newComent = () => {
    Axios.post(`https://nestjstuits.onrender.com/tuits`, {      
      message: messageState,
    }).then(async (res) => {
       fetchData()
    });
  };
 ;

  return (
    <div className="mainComments">
      <div className="boxComments">
      {comments}
      </div>
      <input className="inputMessage"
        placeholder="Your Comment"
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button class="button-6" onClick={newComent}>Post</button>
    </div>
  );
}
