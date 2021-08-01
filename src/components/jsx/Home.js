import videoImage from '../Images/class.png';
import notesImage from '../Images/notes.png';
import adminImage from '../Images/admin.png';
import stdImage from '../Images/std.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-100vh w-100% flex flex-col justify-center align-middle">
      <h2 className="text-center text-gray-700 text-2xl font-semibold space-x-2">
        BCT-077 AB Portal
      </h2>
      <div className="flex flex-wrap justify-between mt-40 w-9/12">
        <Link to="/video">
          <img src={videoImage} alt="" />
        </Link>
        <Link to="/notes">
          <img src={notesImage} alt="" />{' '}
        </Link>
        <Link to="/student">
          <img src={stdImage} alt="" />{' '}
        </Link>
        <Link to="/admin">
          <img src={adminImage} alt="" />{' '}
        </Link>
      </div>
    </div>
  );
};

// const NavIcon = styled.img`
//   width: 180px;
//   object-fit: contain;
//   margin: 30px;
//   filter: drop-shadow(-5px 11px 4px rgba(0, 0, 0, 0.25));
//   cursor: pointer;
//   transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
//   &:hover {
//     filter: drop-shadow(-10px 11px 4px rgba(31, 34, 61, 0.925));
//     transform: rotateX(-17deg);
//   }
//   &:active {
//     transform: scale(1.2);
//     filter: drop-shadow(-10px 11px 4px rgba(150, 50, 26, 0.925));
//   }
// `;
export default Home;
