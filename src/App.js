import logo from './logo.svg';
import axios from "axios";
import React, { useMemo, useState, useEffect, useSortBy } from "react";

import Table from "./Table";
import './App.css';

function App() {
  const columns = useMemo(
      () => [
        {
          // first group - TV Show
          Header: "Scoreboard",
          // First group columns
          columns: [
              {
                  Header:" ",
                  columns:[
                      {
                          Header: "Name",
                          accessor: "Login",
                      }
                ]
              },
              {
                  Header: "Место в категории",
                  columns: [
                      {
                          Header: "Web",
                          accessor: "RelativeWeb",
                      },
                      {
                          Header: "Stego",
                          accessor: "RelativeStego",
                      },
                      {
                          Header: "Crypto",
                          accessor: "RelativeCrypto",
                      },
                  ]
              },
              {
                  Header: "Количество решенных задач",
                  columns: [{
                      Header: "Web",
                      accessor: "Web",
                  },
                      {
                          Header: "Stego",
                          accessor: "Stego",
                      },
                      {
                          Header: "Crypto",
                          accessor: "Crypto",
                      },]
              }

          ],
        },
      ],
      []
  );

  // data state to store the TV Maze API data. Its initial value is an empty array
  // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://vkselection.kirillmsw.ru/api/scoreboard");
      let total = result.data["TasksInfo"];
      console.log(total);
      result.data["UsersInfo"].forEach((node)=>{node.Web=node.Web.toString()+"/"+total["Web"].toString();
                                                node.Stego=node.Stego.toString()+"/"+total["Stego"].toString();
                                                node.Crypto=node.Crypto.toString()+"/"+total["Crypto"].toString()});
      console.log(result.data["UsersInfo"]);
      setData(result.data["UsersInfo"]);
    })();
  }, []);

  return (
      <div className="App">
        <Table columns={columns} data={data} />
      </div>
  );
}

export default App;
