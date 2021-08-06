import { Button, makeStyles } from "@material-ui/core"
import { useState } from "react";
import Backdrop from "../components/Backdrop";
import EditToken from "../components/EditToken";
import Token from "../components/Token"

const Tokens = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };


    return (
        <div className="min-h-full min-w-full">
            <h1 className="text-4xl text-center font-bold text-pink-600 py-12">Tokens</h1>
            <div className="tokens flex flex-wrap mx-2 justify-center">
                {open ?
                    <EditToken className="absolute z-10" handleClose type="add" /> : ""}
                <Button className="max-w-40" variant="outlined" color="primary" onClick={handleToggle}>
                    Submit Your Token
                </Button>
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
                <Token name={"Dinesh"} rollno={10} token="token" />
            </div>
        </div>
    )
}

export default Tokens
