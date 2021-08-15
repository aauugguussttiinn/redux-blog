import { getPosts } from "actions/post.action";
import { addPost } from "actions/post.action";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PostForm = () => {
  

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    if (title && content) {
      const data = {
        title,
        content,
        author: user[0].pseudo,
        likes: 0,
      };

      await dispatch(addPost(data));
      // the 3 following lines will be executed only after the above dispatch
      // thanks to the await (optional)
      setTitle('');
      setContent('');
      dispatch(getPosts());
      // we have to dispatch again because the id of the article is set by the db in backend so
      // we have to update the store by getting its value after creation
    }
  }
  
  return (
    
    <div className="form-container">
      <form onSubmit={ (e) => handleForm(e) }>
        <input type="text" placeholder="Titre du poste" value={ title } onChange={ (e) => setTitle(e.target.value) } />
        <textarea placeholder="Postez vos pensées..." value={ content } onChange={ (e) => setContent(e.target.value) }></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
