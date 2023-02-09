import { StyledForm } from "./style";
const Form = ({ onSubmit, children }) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};
export default Form;
