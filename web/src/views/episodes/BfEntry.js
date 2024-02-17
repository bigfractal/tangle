import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import BfEntryNav from "./BfEntryNav";
import { TabView, TabPanel } from 'primereact/tabview';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function BfEntry( { entryKey }) {
    const [entry, setEntry] = useState( [] );

    const formatDate = ( dateText ) => {
        let aDate = new Date( dateText );
        return new Intl.DateTimeFormat( "en-US" ).format( aDate );
    }

    useEffect( () => {
        fetch( "/api/v1/entry/entryBean/key/" + entryKey )
            .then( response => response.json() )
            .then( data => setEntry( data ) )
    }, [entryKey,entry,setEntry] );

    return (
        <div className="xl:max-w-[760px] w-full">
            <BfEntryNav entryKey={ entryKey } />
            <a href={ entry.youtube } target="_blank">
                <img
                    src={ entry.thumb }
                    alt="blog"
                    className="h-[188px] mb-10"
                />
            </a>

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
                <TabView>
                    <TabPanel header="Chapter">
                        <div id="chapterBody" className="markdown">
                            <Markdown remarkPlugins={[remarkGfm]}>
                                { entry.chapterBody }
                            </Markdown>
                        </div>
                    </TabPanel>
                    <TabPanel header="Video">
                        <div id="videoBody" className="markdown">
                                <iframe className="w-full aspect-video"
                                        src={ "https://www.youtube.com/embed/hpO-imy6Hnk?si=" + entry.youtube}
                                        title={entry.title} frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                <h4 className="pt-5 font-bold text-2xl">Transcript</h4>
                            <Markdown remarkPlugins={[remarkGfm]}>
                               { entry.videoBody }
                            </Markdown>
                        </div>
                    </TabPanel>
                    <TabPanel header="Steps">
                        <div id="stepsBody" className="markdown">
                            <Markdown remarkPlugins={[remarkGfm]}>
                                { entry.stepsBody }
                            </Markdown>
                        </div>
                    </TabPanel>
                </TabView>
            </div>

        </div>
    );
}