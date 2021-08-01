import videoImage from '../Images/class.png';
import notesImage from '../Images/notes.png';
import adminImage from '../Images/admin.png';
import stdImage from '../Images/std.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h2>BCT-077 AB Portal</h2>
      <div>
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
    </>
  );
};

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   width: 100%;
// `;
// const Header = styled.div`
//   font-family: 'Sancreek', cursive;
//   font-size: 45px;
//   line-height: 43px;
//   text-align: center;
//   letter-spacing: 0.06em;
//   color: #f3f3f3;
// `;

// const Navigator = styled.div`
//   width: 75%;
//   display: flex;
//   justify-content: space-between;
//   flex-wrap: wrap;
//   margin-top: 40px;
// `;

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
