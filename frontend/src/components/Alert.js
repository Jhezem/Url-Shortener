import React, {useEffect, useState} from 'react'

export const Alert = ({text, url, showAlert}) => {

    const [newUrl, setnewUrl] = useState('');
    const [show, setshow] = useState(showAlert);

    const hideAlert = () => {
        setshow(false);
        setnewUrl('');
    }

    useEffect(() => {
        const hostName = window.location.host;

        setshow(showAlert);
        setnewUrl(`${hostName}/${url}`);
        console.log(show)
      }, [url]);

    return (
        <>
        {
            show ? 

            <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-emerald-500">
            <span className="text-xl inline-block mr-5 align-middle">
                <i className="fas fa-bell" />
            </span>
            <span className="inline-block align-middle mr-8">
                {text}
            </span>
            <span className="inline-block align-middle mr-8">
                {newUrl}
            </span>
            <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                <span onClick={hideAlert}>×</span>
            </button>
        </div>

        :

        ""

        }
        </>
    )
}
