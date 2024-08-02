import React from 'react';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom';
import ItemList from "../components/ItemList";
import formatExecutionDetails from "../components/ItemListFormatFunctions"
import ItemDetail from '../components/ItemDetail';
import axios from "axios";

async function Execution() {
     const { id } = useParams();
     const response = await axios.get(`/api/execution/${id}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout: 600,
      });
    console.log(response.data)
    return (
        <ItemList items={response.data} linkFormat={`/execution/${id}/{}`} formatCardDetails={formatExecutionDetails}></ItemList>
    );
}

export default Execution;
