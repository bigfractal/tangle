import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

import { Toolbar } from 'primereact/toolbar';
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import 'primeicons/primeicons.css';
import {Panel} from "primereact/panel";

export default function BfEntryNav( { entryKey } ) {
    const navigate = useNavigate();
    const [prevKey, setPrevKey] = useState( [] );
    const [nextKey, setNextKey] = useState( [] );

    useEffect( () => {
        fetch( "http://localhost:8080" + "/api/v1/entry/prevEntry/key/" + entryKey )
            .then( response => response.text() )
            .then( data => setPrevKey( data ) )

        fetch( "http://localhost:8080" + "/api/v1/entry/nextEntry/key/" + entryKey )
            .then( response => response.text() )
            .then( data => setNextKey( data ) )
    } );

    const prevLink = "/episodes/" + prevKey;
    const prevNav = (
        <Button id="prevEntry" link label="Previous" icon="pi pi-arrow-left" className="px-2"
                onClick={ () => {
                    console.log( "prevLink: " + prevLink );
                    navigate( prevLink )
                } } />
    );

    const nextLink = "/episodes/" + nextKey;
    const nextNav = (
        <Button id="nextEntry" link label="Next" icon="pi pi-arrow-right" className="px-3"
                onClick={ () => navigate( nextLink ) } />
    );

    return (
        <Panel className="max-w-full border border-gray-3 mb-4">
            <Toolbar start={prevNav} end={nextNav} className="p-2"/>
        </Panel>
    );
}