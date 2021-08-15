import React from "react";
import PostForm from "components/PostForm/PostForm";
import User from "components/User/User";
import { useSelector } from "react-redux";
import { isEmpty } from "components/Utils/Utils";
import Post from "components/Post/Post";


const App = () => {

  const posts = useSelector((state) => state.postReducer);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          { !isEmpty(posts) && posts.map((post, index) => <Post post={ post } key={ index } />) }
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;

// npm i -s react-redux redux redux-thunk redux-devtools-extension
// json-server --w db.json --> Ca lance le serveur mais on aurait aussi pur créer
// un script dans package.json 'npm run server'

// A ajouter pour du redux
