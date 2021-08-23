import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import myAxios from "../myAxios";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from "@material-ui/core";



const ExamView = () => {
    const { id } = useParams();
    const [description, setDescription] = useState();
    const [questions, setQuestions] = useState();
    const [value, setValue] = useState(null);
    useEffect(() => {
        return (
            myAxios(`/mcq/${id}`).then(res => {
                setDescription(JSON.parse(res.data.data).description);
                setQuestions(JSON.parse(res.data.data).questions);
                questions?.forEach(question => console.log((JSON.parse(question.questionInfo).Choices)));
            }).catch(err => {
                console.log(err);
            }))
    }, [])

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="h-full flex justify-center items-center p-4  flex-col">
            <h1 className="font-bold text-3xl text-red-500">{description}</h1>
            <div className="question flex flex-col text-lg m-4">
                {questions?.map(question => (

                    <div className="options text-indigo-500 text-lg w-full m-5">
                        <form className={`flex flex-wrap flex-1 ${question.div}`} onSubmit={handleSubmit}>


                            <FormControl component="fieldset" key={question.id} className="p-5 w-full">
                                <FormLabel component="legend">
                                    <p className="text-xl text-blue-600 font-semibold py-4" key={question.id + question.formsProoRTQuestionTitle} dangerouslySetInnerHTML={{ __html: question.formsProRTQuestionTitle }} />
                                </FormLabel>
                                <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
                                    {JSON.parse(question.questionInfo).Choices?.map(choice => (
                                        <FormControlLabel key={choice.FormsProDisplayRTText.split("&")[0]} value={choice.FormsProDisplayRTText.split("&")[0]} control={<Radio />} label={choice.FormsProDisplayRTText.split("&")[0]} />))}
                                </RadioGroup>
                                <Button type="submit" variant="outlined" color="secondary">
                                    Check Answer
                                </Button>
                            </FormControl>
                        </form>
                    </div>

                ))
                }
            </div>
        </div >
    )
}

export default ExamView
