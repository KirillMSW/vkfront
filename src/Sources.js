import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_URL} from "./App";


const Sources = () =>{
    return (
        <div>
            <a href="https://github.com/KirillMSW/VKscoreboard">Backend (Backend description in readme)</a>
            <br/>
            <a href="https://github.com/KirillMSW/vkfront">Frontend</a>
        </div>
    );
}
export default Sources;