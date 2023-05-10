import React, {useEffect, useMemo, useState} from 'react';
import Table from "./Table";
import axios from "axios";
import {API_URL} from "./App";
const Scoreboard = () =>{
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

    const [data, setData] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async () => {

            const result = await axios.get(API_URL+"/api/scoreboard", {withCredentials: true});
            let total = result.data["TasksInfo"];
            result.data["UsersInfo"].forEach((node)=>{node.Web=node.Web.toString()+"/"+total["Web"].toString();
                node.Stego=node.Stego.toString()+"/"+total["Stego"].toString();
                node.Crypto=node.Crypto.toString()+"/"+total["Crypto"].toString()});
            // console.log(result.data["UsersInfo"]);
            setData(result.data["UsersInfo"]);
        })();
    }, []);
    return (
        <Table columns={columns} data={data} />
    );
}
export default Scoreboard;
