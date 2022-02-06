import { Link } from "react-router-dom";
import Container from "./styled";

const Menu = () => {
  return (
    <Container>
      <div className="menu-title">Carla Games</div>
      <nav className="menu-navegacao">
        <Link className="menu-link" to="/">
          Notícias
        </Link>
        <Link className="menu-link" to="/games">
          Games
        </Link>
      </nav>
    </Container>
  );
};

export default Menu;
