import React from 'react';
import ReactDOM from 'react-dom';
import BfEntryView from "./BfEntryView";
import BfEntryList from "./BfEntryList";
import {useParams} from "react-router-dom";

export default function BfEpisodes() {
    const { entryKey } = useParams();

    return (
        <section className="pt-10 lg:pt-15 pb-5">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-0">

                { entryKey ?
                    <BfEntryView entryKey={ entryKey } />
                    :
                    <BfEntryList />
                }
            </div>
        </section>
    );
}