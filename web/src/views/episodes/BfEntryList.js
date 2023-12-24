import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import 'primeflex/primeflex.css';
import BfEntryCard from "./BfEntryCard";

export default function BfEntryList() {
    const [entryList, setEntryList] = useState( [] );

    useEffect( () => {
        fetch( "/api/v1/entry/entryList" )
            .then( response => response.json() )
            .then( data => setEntryList( data ) )
    }, [] );

    const itemTemplate = ( entry ) => {
        return <BfEntryCard entry={ entry } />
    }

    return (
        <DataView value={entryList} itemTemplate={ itemTemplate }  />
    );
}