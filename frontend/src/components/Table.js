import React from 'react'

export const Table = ({title, urls}) => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="relative justify-center py-6 text-center">
        <h1 className="text-xl text-green-600">{title}</h1>
    </div>


    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Full Url
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Short Url
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Total Views
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">View</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {urls.map((url) => (
                    <tr key={url.shorten_url} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {url.original_url}
                        </th>
                        <td className="px-6 py-4">
                            {url.shorten_url}
                        </td>
                        <td className="px-6 py-4">
                            {url.views}
                        </td>
                        <td className="px-6 py-4 text-right">
                            <a href={"/"+url.shorten_url} className="font-medium text-green-600 dark:text-blue-500 hover:underline">View</a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>
  )
}
