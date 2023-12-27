import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import BfEntryNav from "./BfEntryNav";

export default function BfEntry( { entryKey }) {
    const [entry, setEntry] = useState( [] );

    const formatDate = ( dateText ) => {
        let aDate = new Date( dateText );
        return new Intl.DateTimeFormat( "en-US" ).format( aDate );
    }

    useEffect( () => {
        fetch( "http://localhost:8080" + "/api/v1/entry/entryBean/key/" + entryKey )
            .then( response => response.json() )
            .then( data => setEntry( data ) )
    }, [entryKey,entry,setEntry] );

    return (
        <div className="xl:max-w-[760px] w-full">
            <BfEntryNav entryKey={ entryKey } />
            <img
                src={ entry.thumb }
                alt="blog"
                className="h-[188px] mb-10"
            />

            <h1
                className="font-bold text-lg sm:text-4xl lg:text-lg text-dark mb-2"
            >
                { entry.title }
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">

                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                        <h4 className="text-custom-sm">
                           { entry.author }
                        </h4>
                        <span
                            className="flex w-[3px] h-[3px] rounded-full bg-dark-2"
                        ></span>
                        <p className="text-custom-sm">{ entry.postStamp }</p>
                        <span
                            className="flex w-[3px] h-[3px] rounded-full bg-dark-2"
                        ></span>
                        <p className="text-custom-sm"></p>
                    </div>
                </div>
            </div>

            <div className="mt-4">
                { entry.body }
            </div>

        </div>
    );
}