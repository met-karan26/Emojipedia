import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
//1.Create entry component
//2.Create props to replace hardcoded data.
//3a.Import the emojipedia const.
//3b.Map through the emojipedia array and rendder Entry components.
function createEmoji(hello){
return (<Entry
key={hello.id}
emoji={hello.emoji} 
  name={hello.name}
  description={hello.meaning}

/>);
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        
       {emojipedia.map(createEmoji)}

        
      </dl>
    </div>
  );
}

export default App;
