import { Container, Form, Background } from "./styles"; 
import { Input } from "../../components/Input";
import { FiMail, FiLock } from "react-icons/fi";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";
import { useState } from "react";

// serve para que a gente consiga usar o nosso context (MyContext)
import { useContext } from "react";
export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({email, password});
  }

  // console.log("meu contexto >>>", email, password);
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicações para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar" onClick={handleSignIn}/>

        <Link to="/register">
          Criar conta
        </Link>
      </Form>

      <Background/>
    </Container>
  );
}