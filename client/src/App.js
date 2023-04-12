import "./App.css";
import { Users } from "./users";
import { useState } from "react";
import Table from "./Table";

function App() {
   const [query, setQuery] = useState("");

   const keys = ["first_name", "last_name", "email"];

   const search = (data) => {
      return data.filter(
         (item) => keys.some((key) => item[key].toLowerCase().includes(query))

         // item.first_name.toLowerCase().includes(query) ||
         // item.last_name.toLowerCase().includes(query) ||
         // item.email.toLowerCase().includes(query)
      );
   };

   return (
      <div className="App">
         <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
         />
         <div className="list-container">
            <ul className="list">
               <Table data={search(Users)} />
            </ul>
         </div>
      </div>
   );
}

export default App;
