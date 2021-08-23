import { Form, Formik } from 'formik';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useState } from 'react';


const Question = ({ question }) => {
    const [value, setValue] = useState(null);

    const handleChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    };
    return (
        <Form>
            <FormControl component="fieldset" key={question.id} className="p-5 w-full">
                <FormLabel component="legend">
                    < p className="text-xl text-blue-600 font-semibold py-4" key={question.id + question.formsProoRTQuestionTitle} dangerouslySetInnerHTML={{ __html: question.formsProRTQuestionTitle }} />
                </FormLabel>
                <RadioGroup aria-label="options" name="options" value={value} onChange={handleChange}>
                    {JSON.parse(question.questionInfo).Choices?.map(choice => (
                        <FormControlLabel key={choice.FormsProDisplayRTText.split("&")[0]} value={choice.FormsProDisplayRTText.split("&")[0]} control={<Radio />} label={choice.FormsProDisplayRTText.split("&")[0]} />))}
                </RadioGroup>
            </FormControl>
        </Form>
    )
}

export default Question
