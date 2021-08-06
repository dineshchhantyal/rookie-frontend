import videoImage from '../Images/class.png';
import notesImage from '../Images/notes.png';
import adminImage from '../Images/admin.png';
import stdImage from '../Images/std.png';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { Button } from '@material-ui/core';

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
        <Link className="navIcon" to="/token">
          <Button variant="outlined" color="primary">
            Submit Your Token
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
