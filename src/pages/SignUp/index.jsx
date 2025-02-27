import { useState } from "react"
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
export function SignUp(){
  // useState é o hook que cria o estado, quando eu crio um estado dentro do parantes eu posso definir o estado inicial se eu colocar aspas dentro do parentes que dizer que o estado inicial e vazio, se e colocar um numero o valor inicial será o numero
  // no vetor ele me entrega duas posição, a primeira é o estado (para acessar o valor atual) e a segunda a função para poder acessar o estado
  // para diferenciar o nome do estado por padrão utiliza-se a palavra set 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  function handleSignUp(){
    if(!name ||!email ||!password){
      return alert("Preencha todos os campos");
    }
    
    api.post("/users",{name, email, password})
    .then(()=> {
      alert("Usuario cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar!")
      }
      
      console.log(name, email)
    });
  }
  
  return (
    <Container>
      <Background/>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicações para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          // toda vez que o valor muda ela dispara um evento
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}/>

        <Link to="/">
          Voltar para login
        </Link>
      </Form>
    </Container>
  );
}