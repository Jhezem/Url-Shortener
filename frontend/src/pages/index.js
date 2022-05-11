import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import axios from '../lib/axios';
import { Table } from '@/components/Table';

export default function Home({ mostViewed }) {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>URL Shortener</title>
            </Head>

            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    {user ?
                        <Link href="/dashboard">
                            <a className="focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                Short Link
                            </a>
                        </Link>
                        :
                        <>
                            <Link href="/login">
                                <a className="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                style={{marginRight: '2px'}}
                                >Login</a>
                            </Link>

                            <Link href="/register">
                                <a className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                style={{marginLeft: '2px'}}
                                >
                                    Register
                                </a>
                            </Link>
                        </>
                    }
                </div>

                {
                    mostViewed[0] ? 

                    <Table urls={mostViewed} title={'Check the most viewed links'}/>

                    :

                    <h1 className="text-xl text-red-600"> There's not shorten links yet!</h1>
                }
            
            </div>
        </>
    )
}

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