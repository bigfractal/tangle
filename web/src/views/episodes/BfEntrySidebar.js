import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import BfEntryCard from "./BfEntryCard";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";
import {DataView} from "primereact/dataview";

export default function BfEntrySidebar() {
    const [entryList, setEntryList] = useState( [] );
    const navigate = useNavigate();

    useEffect( () => {
        fetch( "/api/v1/entry/recentEntryList" )
            .then( response => response.json() )
            .then( data => setEntryList( data ) )
    }, [] );

    const itemTemplate = ( entry ) => {
        const entryLink = "/episodes/" + entry.key;
        return (
            <Button link onClick={ () => navigate( entryLink ) } className="mb-5">
                <div className="border-lightgray-50 border-1">
                    <img className="min-w-[160px] w-[160px]" src={ entry.thumb } alt="thumbnail" />
                </div>

                <div className="pl-4">
                    <div className="text-left pb-2">
                        <p className="text-custom-xs">{ entry.postStamp }</p>
                    </div>

                    <h5 className="pb-2 text-left font-medium text-xs text-dark">
                        { entry.title }
                    </h5>

                </div>
            </Button>
        );
    }

    return (
        <div class="max-w-[400px] w-full">
            <div className="flex flex-col gap-10">
                <div className="max-w-[400px] w-full rounded-[10px] border border-gray-3 p-4 sm:p-7.5 lg:p-10">
                    <h4 className="font-semibold text-custom-4 text-dark mb-7.5">
                        Recent Posts
                    </h4>
                    <div className="flex flex-col gap-7.5">
                        <DataView value={entryList} itemTemplate={ itemTemplate }  />
                    </div>
                </div>
            </div>
        </div>
    );
}