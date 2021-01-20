import React, { useState } from 'react'


export default function Card(props) {
    const [search, setSearch] = useState(null)

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const displayCards = (props) => {
        const { datas } = props;

        if (datas.length > 0) {
            return (datas.filter((data) => {
                if(search == null)
                    return data
                else if (data.title.toLowerCase().includes(search.toLowerCase())){
                    return data
                }
            })
            .map(data => {
                    return(
                        <div className="py-6 px-5 border border-purple-100 rounded-lg my-2" key={data.id}>
                            <div className="">
                                <span className="py-1 px-4 bg-green-50 text-green-600 rounded-full font-semibold" style={{ fontSize: '11px' }}>Job Title</span>
                                <p className="text-sm text-gray-800 font-bold mt-2 ">{data.title}</p>
                            </div>
                            <div className="mt-6">
                                <span className="py-1 px-4 bg-green-50 text-green-600 rounded-full font-semibold" style={{ fontSize: '11px' }}>Company</span>
                                <p className="text-sm text-gray-800 font-bold mt-2 ">{data.company}</p>
                            </div>
                            <div className="mt-6">
                                <span className="py-1 px-4 bg-green-50 text-green-600 rounded-full font-semibold" style={{ fontSize: '11px' }}>Location & Type</span>
                                <p className="text-sm text-gray-800 font-bold mt-2 ">{data.location} - {data.type}</p>
                            </div>
                            <div className="mt-6">
                                <span className="py-1 px-4 bg-purple-50 text-purple-600 rounded-full font-semibold" style={{ fontSize: '11px' }}>Job Url</span>
                                <div className="mt-2">
                                    <a href={data.url} className="text-purple-600 pr-4 font-bold underline" style={{ fontSize: '11px' }}>{data.url}</a>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        } else {
            return (
                <p className="font-semibold">No Jobs</p>
            )
        }
    }

    return (
        <div className="mx-5 my-6">
            <div className="mb-8">
                <form className="flex items-center">
                    <input type='text' className="border bg-white resize-none border-gray-200 py-2 px-4 rounded-xl outline-none text-sm" style={{ height: '40px' }} value={search} onChange={handleChange} placeholder='Search...' />
                </form>
            </div>
            <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 grid gap-4">
                {displayCards(props)}
            </div>
        </div>
    )
}