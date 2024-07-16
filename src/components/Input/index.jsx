import { Container } from "./styles";
export function Input({ icon: Icon, ...rest }){
  // aqui foi feita uma conversão pois a regra de que todo componente se inicia com a letra maiuscula
  return(
    <Container>
      {Icon && <Icon size={20}/>}
      {/* aqui esta realizando a seguinte logica, se existe icone ele aplica, caso não ele não aplica */}
      <input {...rest}/>
    </Container>
  );
}