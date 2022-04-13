import Button from '@mui/material/Button';
import './navArrows.scss'
import { Link } from 'react-router-dom'

const NavArrows = ({ navBack, navForward }) => {
  let navBackID
  let navForwardID
  switch (navBack) {
    case "academics":
      navBackID = "Academics"
      window.scrollTo(0,0);
      break
    case "coop":
      navBackID = "Co-op"
      window.scrollTo(0,0);
      break
    case "lifestyles":
      navBackID = "Lifestyles"
      window.scrollTo(0,0);
      break
    case "demographics":
      navBackID = "Demographics"
      window.scrollTo(0,0);
      break
    case "highschool":
      navBackID = "High School"
      window.scrollTo(0,0);
      break
    default:
      navBackID = navBack
  }
  switch (navForward) {
    case "academics":
      navForwardID = "Academics"
      window.scrollTo(0,0);
      break
    case "coop":
      navForwardID = "Co-op"
      window.scrollTo(0,0);
      break
    case "lifestyles":
      navForwardID = "Lifestyles"
      window.scrollTo(0,0);
      break
    case "demographics":
      navForwardID = "Demographics"
      window.scrollTo(0,0);
      break
    case "highschool":
      navForwardID = "High School"
      window.scrollTo(0,0);
      break
    default:
      navForwardID = navForward
  }
  return (
      <div className="NavigationalButtons">
        <div className="Wrapper" id={navBack}>
          <Link to={`/${navBack}`}>
            <Button sx={{
              backgroundColor: "#27313B",
              color: "white",
              padding: "16px",
              borderRadius: "18px",
              textTransform: "none"
            }} variant="outline">&larr; {navBackID}</Button>
          </Link>
        </div>
        <div className="Wrapper" id={navForward}>
          <Link to={`/${navForward}`}>
            <Button sx={{
              backgroundColor: "#27313B",
              color: "white",
              padding: "16px",
              borderRadius: "18px",
              textTransform: "none"
            }} variant="outline">{navForwardID} &rarr;</Button>
          </Link>
        </div>
      </div>
  );
}

export default NavArrows;