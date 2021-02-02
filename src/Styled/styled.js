import styled, { ThemeProvider } from "styled-components";


const AppWrapper = styled.div`
  background: ${(props) => props.theme.primary};
  box-shadow: ${(props) => props.theme.boxShadow};
  height: max-content;
  width: 40%;
  overflow-x: hidden;
  margin: 5rem auto;
  border-radius: 14px;

  @media screen and (max-width: 670px){
    width: 80%
  }
`;

const NavWrapper = styled.div`
  width: 98%;
  position: relative;
  top: 0rem;
  background: ${(props) => props.theme.secondary};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: .7rem;
  margin: 1rem auto;
  overflow: hidden;
  color: ${(props) => props.theme.primary}
  height: 60px;
`;
const LinkList = styled.div`
  list-style: none;
  list-padding: none;
  display: grid;
  // justify-items: center;
  // align-content: center;
  grid-template-columns: repeat(2, 1fr);
`;

const LinkItem = styled.div`
  a {
    padding: 16px 24px;
    display: block;
    font-weight: bold;
    color: ${(props) => props.theme.primary};
    text-decoration: none;
    text-transform: capitalize;
    text-align: center;
  }
`;

const TaskList = styled.div`
list-style: none;
list-padding: none;
display: grid;
color: {props.color? props.color ; 'red'};
grid-template-colums: 1fr;
padding: 1rem;
`

const TaskItem = styled.div`
padding: 1.5rem 2rem;
margin: .5rem 0;
border-radius: .7rem;
box-shadow: ${(props) => props.theme.boxShadow};

  a{
    text-decoration: none;
    text-transform: capitalize;
    display: grid;
    cursor: pointer;
    color: ${props => props.theme.secondary};
    justify-items: space-between;
    grid-gap: 4%;
    grid-template-columns: 5fr 1fr 1fr;
  }
`
const Form = styled.div`{
  width: 80;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr;
}

h3{
  text-align: center;
  margin: 1rem 0;
  color: ${props => props.theme.secondary};
  text-transform: capitalize;
}

div input[type=text]{
  width: 90%;
  padding: 16px 6px;
  color: ${(props) => props.theme.primary};
  background: #f2f2f2;
  border-radius: .7rem;
  border: 0;
  outline: 0;
}

div{
  display: flex;
  margin: 1rem;;
  justify-content: center;
  align-items: center;
}

div input[type=submit]{
  padding: 12px 26px;
  background: ${(props) => props.theme.secondary};
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  border-radius: 7px;
  box-shadow: ${(props) => props.theme.boxShadow};
  outline: 0;
  cursor: pointer;
  border: 0;
  text-transform: capitalize;
  text-align: center;
}`

export default AppWrapper;

export { NavWrapper, LinkList, LinkItem }

export {TaskList, TaskItem}

export { Form}
