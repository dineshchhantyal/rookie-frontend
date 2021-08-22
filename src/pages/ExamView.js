import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import myAxios from "../myAxios";

const ExamView = () => {
    const { id } = useParams();
    const [description, setDescription] = useState();
    const [questions, setQuestions] = useState();
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
    return (
        <div className="h-full flex justify-center items-center p-4 flex-col">
            <h1 className="font-bold text-3xl text-red-500">{description}</h1>
            <div className="question flex flex-col text-lg m-4">
                {questions?.map(question => (
                    <div key={question.id} className="p-5 w-full">
                        < p className="text-xl text-blue-600 font-semibold py-4" key={question.id + question.formsProoRTQuestionTitle} dangerouslySetInnerHTML={{ __html: question.formsProRTQuestionTitle }} />
                        <div className="options text-indigo-500 text-lg w-full">
                            <form className={`flex flex-wrap w-full flex-1 ${question.div}`}>
                                {JSON.parse(question.questionInfo).Choices?.map(choice => (
                                    <div className="py-2 px-9" >
                                        <label htmlFor={choice.FormsProDisplayRTText} name={choice.FormsProDisplayRTText}>
                                            <input type="radio" key={choice.FormsProDisplayRTText + Math.random()} className="pr-4" value={choice.FormsProDisplayRTText} name={choice.FormsProDisplayRTText} />
                                            <span dangerouslySetInnerHTML={{ __html: choice.FormsProDisplayRTText }} />
                                        </label>
                                    </div>
                                ))}
                            </form>
                        </div>
                    </div>

                ))
                }
            </div>
        </div >
    )
}

export default ExamView
