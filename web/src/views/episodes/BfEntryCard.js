import React from 'react';
import ReactDOM from 'react-dom';

export default function BfEntryCard( { entry }) {
    const entryLink = "/episodes/" + entry.key;
    
    return (
        <div className="max-w-[400px] p-10">
            <div className="mb-6 overflow-hidden rounded-[10px] transition-all group-hover:scale-105" >
                <a href={ entryLink }>
                    <img src={ entry.thumb } alt="image" className="w-[336px]" />
                </a>
            </div>

            <h3>
                <a href={ entryLink } className="block text-dark font-bold text-xl mb-3.5">
                    <span className="bg-gradient-to-r from-primary/50 to-primary/40 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                      { entry.title }
                    </span>
                </a>
            </h3>
            <p>{ entry.body }</p>

            <div className="flex flex-wrap gap-3 items-center justify-between mt-4.5">
                <div className="flex items-center gap-2.5">
                    <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
                    <p className="text-sm">{ entry.postDate }</p>
                </div>
            </div>
        </div>
    );
}