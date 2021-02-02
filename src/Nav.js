import { NavWrapper, LinkList, LinkItem } from './Styled/styled'
import { Link } from 'react-router-dom'
const Navs = () => {
  return (
    <NavWrapper>
      <LinkList>
        <LinkItem><Link to="/">Home</Link></LinkItem>
        <LinkItem><Link to="/new-todo">new todo</Link></LinkItem>
      </LinkList>
    </NavWrapper>
    );
};

export default Navs;
