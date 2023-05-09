import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "./App";


const Secret = () =>{
    const [data, setData] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async () => {

            const result = await axios.get(API_URL+"/api/secret", {withCredentials: true});
            // console.log(total);
            // console.log(result.body)
            // console.log(result.data["UsersInfo"]);
            setData(result.data);
        })();
    }, []);

    return (
        <div>
            {data}
        </div>
    );
}
export default Secret;