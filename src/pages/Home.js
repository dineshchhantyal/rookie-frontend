import videoImage from '../Images/class.png';
import notesImage from '../Images/notes.png';
import adminImage from '../Images/admin.png';
import stdImage from '../Images/std.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import BorderColorIcon from '@material-ui/icons/BorderColor';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen ">
      <h2 className="mt-5 text-center text-gray-700 text-4xl font-extrabold space-x-2">
        BCT-077 AB Portal
      </h2>
      <div className="flex flex-wrap justify-center mt-40 w-4/5">
        <Link className={'navIcon'} to="/video">
          <img src={videoImage} alt="" />
        </Link>
        <Link className={'navIcon'} to="/notes">
          <img src={notesImage} alt="" />{' '}
        </Link>
        <Link className={'navIcon'} to="/team">
          <img src={stdImage} alt="" />{' '}
        </Link>

        <Link className={'navIcon'} to="/admin">
          <img src={adminImage} alt="" />{' '}
        </Link>
      </div>
      <Link className={'flex items-center justify-center w-1/4 bg-blue-200 p-2 hover:bg-blue-300 '} to="/exam">
        <BorderColorIcon fontSize="large" color="primary" />
        <p className="font-bold text-2xl text-red-500">Exam Special 🎉</p>
      </Link>
    </div>
  );
};

export default Home;
