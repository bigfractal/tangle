import React from 'react';
import ReactDOM from 'react-dom';
import BfEntryNav from "./BfEntryNav";
import BfEntry from "./BfEntry";
import BfEntrySidebar from "./BfEntrySidebar";

export default function BfEntryView( { entryKey } ) {
    return (
        <section className="pt-1 pb-1">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-8 xl:px-0">
                <div className="flex flex-wrap gap-7.5">
                    <BfEntry entryKey={ entryKey } />
                    <BfEntrySidebar />
                </div>
            </div>
        </section>
    );
}