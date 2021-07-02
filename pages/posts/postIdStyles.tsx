import styled from "styled-components";

const PostStyles = styled.div`
  padding: 30px;
  font-family: Roboto;

  & h2 {
    font-family: Roboto;
    font-size: 30px;
    color: #1504ff;
  }
  .bodyPost {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 20px;
  }
  & .commentHeader {
    margin-top: 30px;
    font-size: 30px;
    margin-bottom: 10px;
  }
  & .comentsList {
    width: 600px;
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  & .commentItem {
    margin: 5px;
    padding: 5px;
    padding-left: 20px;
    width: 500px;
    height: 50px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.55);
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const UpdateformStyles = styled.form`
  padding: 30px;
  font-family: Roboto;
  & .updateWrapper {
    & label {
      width: 900px;
    }
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & .updateHeader {
    font-size: 30px;
    margin-bottom: 10px;
  }

  & .inputTitle {
    width: 900px;
    height: 30px;
    align-items: flex-start;
  }

  & .inputBody {
    width: 900px;
    height: 100px;
  }
  & .updateSubmit {
    width: 500px;
    height: 40px;
    background-color: #0e0ef3;
    color: #fff;
    font-size: 20px;
    transition: box-shadow 0.2s ease-in-out;
    :hover {
      box-shadow: 1px 1px 5px 1px rgba(245, 68, 15, 0.822);
      transition: box-shadow 0.2s ease-in-out;
    }
  }
`;
const CreateCommentStyles = styled.form`
  padding: 30px;
  font-family: Roboto;
  & .commentWrapper {
    & label {
      width: 900px;
    }
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  & .commentHeader {
    font-size: 30px;
    margin-bottom: 10px;
  }

  & .inputBody {
    width: 900px;
    height: 100px;
  }
  & .commentSubmit {
    width: 500px;
    height: 40px;
    background-color: #0e0ef3;
    color: #fff;
    font-size: 20px;
    transition: box-shadow 0.2s ease-in-out;
    :hover {
      box-shadow: 1px 1px 5px 1px rgba(245, 68, 15, 0.822);
      transition: box-shadow 0.2s ease-in-out;
    }
  }
`;

const DelettedButton = styled.button`
  font-family: Roboto;
  margin: 0 auto;
  margin-bottom: 40px;
  display: block;
  width: 200px;
  height: 40px;
  background-color: #f30e0e;
  color: #fff;
  font-size: 20px;
  transition: box-shadow 0.2s ease-in-out;
  :hover {
    box-shadow: 1px 1px 5px 1px rgba(15, 19, 245, 0.822);
    transition: box-shadow 0.2s ease-in-out;
  }
`;
export { PostStyles, UpdateformStyles, CreateCommentStyles, DelettedButton };
