import React from 'react'

const Team = ({ name, members, projectName, description }) => {
    return (
        <ul className="w-full flex justify-around m-3 p-3
        cursor-pointer bg-blue-600 opacity-80 hover:opacity-100 hover:bg-blue-500 rounded-md">
            <li className="text-xl font-medium text-gray-300">TEAM NAME : {name}</li>
            <li className="text-red-200"> PROJECT NAME : {projectName}</li>
        </ul>
    )
}

export default Team;
