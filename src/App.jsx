import React from "react";
import PostForm from "components/PostForm/PostForm";
import User from "components/User/User";

const App = () => {
  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">CONTENU</div>
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
