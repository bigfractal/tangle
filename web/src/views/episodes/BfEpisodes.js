import React from 'react';
import ReactDOM from 'react-dom';
import BfEntryView from "./BfEntryView";
import BfEntryList from "./BfEntryList";
import {useParams} from "react-router-dom";

export default function BfEpisodes() {
    const { entryKey } = useParams();

    return (
        <section className="pt-20 lg:pt-25 pb-15">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-0">

                <div className="mb-3 text-center">
                    <h2 className="text-dark mb-3.5 text-2xl font-bold sm:text-4xl xl:text-heading-3">
                       Episodes
                    </h2>
                    <p>New episodes air every Monday, Wednesday, and Friday at 6am GMT</p>
                </div>

                { entryKey ?
                    <BfEntryView entryKey={ entryKey } />
                    :
                    <BfEntryList />
                }
            </div>
        </section>
    );
}