import React from 'react';

import './App.css';
import MyUploader from './Components/Upload/Upload';

function App() {
  return (
      <div className="App">
        <MyUploader/>
      </div>
  );

  // pure html
  // return (
  //   <div className="App">
  //     <form action="http://127.0.0.1:5000/upload"
  //           method="post"
  //           encType="multipart/form-data">
  //       <input type="file"
  //              name="file"/>
  //       <input type="submit"
  //              value="Upload"/>
  //     </form>
  //   </div>
  // );
}

export default App;
