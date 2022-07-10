import { Container, StyledRiCloseCircleLine } from "./ErrorMessage.styles";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <Container>
        <StyledRiCloseCircleLine  />
        <label>{message}</label>
    </Container>
  );
};
export default ErrorMessage;
