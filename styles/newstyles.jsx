import styled from "styled-components";

const AddFormstyles = styled.form`
  max-width: 900px;
  height: 300px;
  padding: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Roboto;

  & .inputTitle {
    width: 900px;
    height: 30px;
    align-items: flex-start;
  }

  & .inputBody {
    width: 900px;
    height: 100px;
  }

  & .addSubmit {
    width: 500px;
    height: 40px;
    background-color: #0e0ef3;
    color: #fff;
    font-size: 20px;
    :hover {
      box-shadow: 1px 1px 5px 1px rgba(245, 68, 15, 0.822);
      transition: box-shadow 0.2s ease-in-out;
    }
  }
`;

export { AddFormstyles };
