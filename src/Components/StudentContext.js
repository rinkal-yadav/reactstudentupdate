
import React, { useState,createContext } from "react";


export const StudentContext = createContext();

export const StudentProvider = (props) => {


    const [rows, setrows] = useState([
        {
            id : '1',
            name: "Atul",
            age : 25,
            course : "MERN",
            batch : "october"
        } ,

        {
            id : '2',
            name: "Rahul",
            age : 22,
            course : "MERN",
            batch : "November"
        } ,

        {
            id : '3',
            name: "Adity",
            age : 23,
            course : "MERN",
            batch : "September"
        } ,

        {
            id : '4',
            name: "Rinkal",
            age : 24,
            course : "MERN",
            batch : "September"
        } ,

        {
            id : '5',
            name: "Praju",
            age : 20,
            course : "MERN",
            batch : "December"
        }
   ])


    return (
            <StudentContext.Provider value={[rows,setrows]}>
            {props.children}
        </StudentContext.Provider>
    )
}
