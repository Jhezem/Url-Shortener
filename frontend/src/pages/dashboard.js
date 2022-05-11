import react, {useState} from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import {Table}  from '@/components/Table'
import axios from '../lib/axios'
import { Alert } from '@/components/Alert'

const Dashboard = ({ mostViewed }) => {

    const [state, setState] = useState({
        showAlert: false,
        newUrl: '',
      });

    const shortLink = async (event) => {
        event.preventDefault();
        const originalUrl = event.target.url.value;
        const result = await axios.post(`/api/short?original_url=${originalUrl}`);
        const shortUrl = result.data.data.shorten_url;
        alert(result.data.msg);
        setState({...state, showAlert: true, newUrl: shortUrl});
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Shorten Link
                </h2>
            }>

            <Head>
                <title>Your Dashboard</title>
            </Head>

            <Alert url={state.newUrl} text={'Your shorten url is:'} showAlert={state.showAlert}/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    
                        <form onSubmit={shortLink}>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter a URL</label>
                                <input type="text" name='url' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://nextjs.org/" required />
                            </div>
                            <button type="submit" className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                New Shorten Link
                            </button>
                        </form>
                   
                </div>
            </div>
            {
                    mostViewed[0] ? 

                    <Table urls={mostViewed} title={'Most viewed links'}/>

                    :

                    <h1 className="text-xl text-red-600"> There's not shorten links yet!</h1>
                }
        </AppLayout>
    )
}

export default Dashboard


export async function getStaticProps() {
    try {
        const result = await axios.get('api/most-viewed');
        const data = result.data;
        return {
            props: {
                mostViewed: data
            }
        }
    } catch (error) {
        console.error(error);
    }
}