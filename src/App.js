import "./App.css";
import { Users } from "./users";
import { useState } from "react";

function App() {
   const [query, setQuery] = useState("");

   return (
      <div className="App">
         <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
         />

         <ul className="list">
            {Users.filter((item) =>
               item.first_name.toLowerCase().includes(query.toLowerCase())
            ).map((person) => (
               <li className="item" key={person.id}>
                  {person.first_name}
               </li>
            ))}
         </ul>
      </div>
   );
}

export default App;
