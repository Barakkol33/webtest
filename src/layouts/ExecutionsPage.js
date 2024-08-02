import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from "../../components/ItemList";
import ItemDetail from '../../components/ItemDetail';

const itemsData = [
    {
        name: "j1",
        date: "2024-07-16",
        user: "Steve",
        var1: "V1",
        var2: "F2"
    },
    {
        name: "j2",
        date: "2024-07-17",
        user: "Steve",
        var1: "V1",
        var2: "F3"
    },
     {
        name: "j2",
        date: "2024-07-17",
        user: "Steve",
        var1: "V1",
        var2: "F3"
    },
     {
        name: "j2",
        date: "2024-07-17",
        user: "Steve",
        var1: "V1",
        var2: "F3"
    },
     {
        name: "j2",
        date: "2024-07-17",
        user: "Steve",
        var1: "V1",
        var2: "F3"
    },
     {
        name: "j2",
        date: "2024-07-17",
        user: "Steve",
        var1: "V1",
        var2: "F3"
    },
     {
        name: "j2",
        date: "2024-07-17",
        user: "Steve",
        var1: "V1",
        var2: "F3"
    }
];

function App() {
    return (
        <ItemList items={itemsData} linkFormat={`/execution/{}`}></ItemList>
    );
}

export default App;
