import { Container } from "./styles";

export function AreaText({ value, ...rest }){
  return(
    <Container {...rest}>
      {value}
    </Container>
  );
}