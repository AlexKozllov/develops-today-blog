import styled from "styled-components";

const PostsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const PostsListItem = styled.li`
  width: 400px;
  min-height: 300px;
  margin: 10px;
  padding: 10px;
  font-family: Roboto;
  font-size: 20px;
  border: solid 1px #000;
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.55);
    transition: box-shadow 0.2s ease-in-out;
  }
  & a {
    display: block;
    width: 400px;
    min-height: 300px;
    padding: 15px;
    font-family: Roboto;
    font-size: 20px;
    color: #000;
    &:visited {
      color: #000;
    }
    text-decoration: none;
  }
`;

export { PostsList, PostsListItem };
