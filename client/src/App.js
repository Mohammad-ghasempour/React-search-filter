import "./App.css";
// import { Users } from "./users";
import { useEffect, useState } from "react";
import Table from "./Table";

function App() {
   const [query, setQuery] = useState("");
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchUsers = async () => {
         const res = await fetch(`http://localhost:5000?q=${query}`);
         setData(await res.json());
      };
      if (query.length === 0 || query.length > 1) fetchUsers();
   }, [query]);

   return (
      <div className="App">
         <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
         />
         <div className="list-container">
            <ul className="list">
               <Table data={data} />
            </ul>
         </div>
      </div>
   );
}

export default App;
