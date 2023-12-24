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
        <div className="mb-3 text-center">
            <h2 className="text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3">
                Episodes
            </h2>
            <p>New episodes air every Monday, Wednesday, and Friday at 6am GMT</p>

            <DataView value={entryList} itemTemplate={ itemTemplate }  />
        </div>
    );
}