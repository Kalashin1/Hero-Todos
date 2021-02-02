import styled from "styled-components";

const AppWrapper = styled.div`
  background: #fff;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
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
  background: darkblue;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
  border-radius: .7rem;
  margin: 1rem auto;
  overflow: hidden;
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
    color: #fff;
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
box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);

  a{
    text-decoration: none;
    text-transform: capitalize;
    display: grid;
    cursor: pointer;
    justify-items: space-between;
    grid-gap: 4%;
    grid-template-columns: 5fr 1fr 1fr;
  }
`


export default AppWrapper;

export { NavWrapper, LinkList, LinkItem }

export {TaskList, TaskItem}
