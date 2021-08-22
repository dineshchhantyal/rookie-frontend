import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import myAxios from "../myAxios";

const Exam = () => {
    const [exams, setExams] = useState([])
    useEffect(() => {
        myAxios('/mcq').then(res => {
            console.log(res.data)
            setExams(res.data);
        }).catch(err => {
            console.log(err)
        });
    }, []);

    return (
        <div className="w-full h-screen p-8 flex items-center flex-col">
            <h1 className="text-red-700 font-extrabold text-center text-3xl my-7">Exam</h1>
            {
                exams.map(exam => (
                    <Link key={exam._id} className="my-2 bg-secondary text-blue-300 p-5 w-3/5 cursor-pointer" to={`exam/${exam._id}`}>
                        <h1 className="text-white">{exam._id}</h1>
                        <div className="info flex justify-between mt-3">
                            <span>{exam.data.slice(0, 20) + "..."}</span>
                            <span>{new Date(exam.uploadDate).toString().split("GMT")[0]}</span>
                        </div >
                    </Link>
                ))
            }
        </div >
    )
}

export default Exam
