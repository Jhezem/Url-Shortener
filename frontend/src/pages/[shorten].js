import React, { useEffect } from 'react';
import Head from 'next/head'
import axios from '../lib/axios';


export default function Link({ shorten }) {

    useEffect( ()=> {
        window.location.href = shorten.original_url;
    },[]);

    return (
        <>
            <Head>
                <title>Redirecting to Url {shorten.original_url}</title>
            </Head>
        </>
    );
}

export async function getStaticPaths() {
    try {
        const links = await axios.get('/api/all/');
        return {
            paths: links.data.map(link => {
                const shorten = link.shorten_url;
                return {
                    params: {
                        shorten
                    }
                }
            }),
            fallback: false
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getStaticProps({ params }) {
    try{
        const shorten = params.shorten;
        const result = await axios.get(`/api/shorten-url/${shorten}`);
        const data = result.data;
    
        return {
            props: {
                shorten: data
            }
        }
    } catch(error){
        console.error(error);
    }

}