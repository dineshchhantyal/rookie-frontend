import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

const EditToken = (props) => {
    const [name, setName] = useState(props.name);
    const [rollno, setRollno] = useState(props.rollno);
    const [token, setToken] = useState(props.token);
    const type = props.type;
    return (
        <div className="fixed z-10 h-3/5 w-3/5 p-9 bg-blue-200 rounded-lg flex content-center items-center flex-col">
            <h2 className="font-bold text-green-600"  >{type == "add" ? "ADD NEW TOKEN" : "UPDATE TOKEN"}</h2>
            <form className="p-7 h-4/5 w-3/5 justify-evenly flex flex-wrap flex-col" noValidate autoComplete="off">
                <TextField id="standard-basic" label="Name" />
                <TextField id="standard-basic" label="Rollno" />
                <TextField id="standard-basic" label="Token" />
                <Button variant="contained" color="primary">
                    Sumbit
                </Button>
            </form>
        </div>
    )
}

export default EditToken
