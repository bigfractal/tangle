import React from 'react';
import ReactDOM from 'react-dom';
import BfEntryNav from "./BfEntryNav";
import BfEntry from "./BfEntry";
import BfEntrySidebar from "./BfEntrySidebar";

export default function BfEntryView( { entryKey } ) {
    return (
        <div className="bg-purple-300">
            EntryView: { entryKey }

            <BfEntryNav />
            <BfEntry />
            <BfEntrySidebar />
        </div>
    );
}