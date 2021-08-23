import React from 'react';
import Team from '../components/Team';
import AddIcon from '@material-ui/icons/Add';
import Backdrop from '../components/Backdrop';

const Teams = () => {
    return (
        <div className="h-full w-full pt-3 flex flex-col flex-wrap justify-evenly items-center ">
            <h1 className=" text-green-400 text-2xl  font-bold">
                List of Teams
            </h1>
            <div className="actions self-end pr-6">
                <Backdrop className="bg-green-500 text-grey-200">
                    <AddIcon />
                </Backdrop>
            </div>
            <div className="w-4/5">
                <Team className="w-3/5 m-12" name={"dinesh"} projectName={"MahaKal"} />
                <Team className="w-3/5 m-4" name={"dinesh"} projectName={"MahaKal"} />
                <Team className="w-3/5 m-4" name={"dinesh"} projectName={"MahaKal"} />
                <Team className="w-3/5 m-4" name={"dinesh"} projectName={"MahaKal"} />
            </div>

        </div>
    );
};

export default Teams;
