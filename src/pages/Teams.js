import React from 'react';
import Team from '../components/Team';
import AddIcon from '@material-ui/icons/Add';

const Teams = () => {
    return (
        <div className="h-full w-full pt-3 flex flex-col flex-wrap justify-evenly items-center ">
            <h1 className=" text-green-400 text-2xl  font-bold">
                List of Teams
            </h1>
            <div className="actions self-end pr-6">
                <button className="bg-green-500 text-grey-200">
                    <AddIcon />
                </button>
            </div>
            <div className="h-3/4 w-4/5">
                <Team className="w-3/5" name={"dinesh"} projectName={"MahaKal"} />
                <Team name={"dinesh"} projectName={"MahaKal"} />
                <Team name={"dinesh"} projectName={"MahaKal"} />
                <Team name={"dinesh"} projectName={"MahaKal"} />
            </div>

        </div>
    );
};

export default Teams;
