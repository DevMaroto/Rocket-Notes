import { Container } from "./styles";
import { Tag } from "../Tag";

export function Note({ data, ...rest }){
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}

// linha 7 título da nota 
// linha 9 renderização das tags caso elas existirem
// linha 13 quando estamos trabalhando com lista é imporante identificar o elemento, pois cada elemento é unico identiica por key