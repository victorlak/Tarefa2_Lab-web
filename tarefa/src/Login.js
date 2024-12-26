import logo from './logo.svg';
import './App.css';
import { Input, Button } from 'reactstrap';
import React, { useState } from 'react';
import Swal from 'sweetalert2'



function Login() {
  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [SenhaCheck, setSenhaCheck] = useState("");
  const [Numero, setNumero] = useState("");
  const [Nome, setNome] = useState("");
  const [Sobrenome, setSobrenome] = useState("");
  const [cadastrando, setCadastrando] = useState(false);

  function atualizaCadastrando() {
    setCadastrando(!cadastrando)
  }
  function validarCadastro(){
    if(Senha != SenhaCheck ){
      return false  
    }else if(!Email || !Senha || !Numero || !Nome || !Sobrenome){
      return false
    }else if(!Email.includes("@"))
      return false
    else{
      return true
    }
  }
  function validaLogin(){
    if(!Email || !Senha){
      return false
    }else if(!Email.includes("@")){
      return false
    }else{
      return true
    }
  }
  return (


    <div className="App">
      {cadastrando ?
        <div className="registro">
          <h1 className="display-5">Cadastro</h1>
          <h5 className='mt-4'>Nome:</h5>
          <Input onChange={(e)=>{setNome(e.target.value); }} />
          <h5 className='mt-2'>Sobrenome:</h5>
          <Input onChange={(e)=>{setSobrenome(e.target.value); }} />
          <h5 className='mt-2'>Telefone:</h5>
          <Input onChange={(e)=>{setNumero(e.target.value); }} placeholder='32 9999-9999' />
          <h5 className='mt-2'>Email:</h5>
          <Input onChange={(e)=>{setEmail(e.target.value); }} placeholder='Exemplo@gmail.com' />
          <h5 className='mt-2'>Senha:</h5>
          <Input type='password' onChange={(e)=>{setSenha(e.target.value); }} placeholder='********' />
          <h5 className='mt-2'>Confirme a senha:</h5>
          <Input type='password' onChange={(e)=>{setSenhaCheck(e.target.value); }} placeholder='********' />
          <div className='cadastro'>
            <Button className='mt-2' color='primary' onClick={atualizaCadastrando}>Voltar</Button>
            <Button className='mt-2 ml-5' color='primary' onClick={()=>{
              validarCadastro() ? Swal.fire({
                icon: "success",
                title: "Cadastro realizado",
              }) :
              Swal.fire({
                icon: "error",
                title: "Senhas incompativeis ou dados incompletos",
              });

              
            }}>Cadastrar</Button>
          </div>
        </div>
        :
        <div className="login">
          <h1 className="display-5">Login</h1>
          <h5 className='mt-4'>Email:</h5>
          <Input onChange={(e)=>{setEmail(e.target.value); }} placeholder='Exemplo@gmail.com' />
          <h5 className='mt-4'>Senha:</h5>
          <Input type='password' onChange={(e)=>{setSenha(e.target.value); }} placeholder='*********' />
          <div className='cadastro'>
            <Button className='mt-2' color='primary' onClick={()=>{
              validaLogin() ? Swal.fire({
                icon: "success",
                title: "Login Efetuado",
              }) :
              Swal.fire({
                icon: "error",
                title: "Preencha os campos",
              })
            }}>Entrar</Button>
            <Button className='mt-2 ml-5' color='primary' onClick={atualizaCadastrando}>Realizar cadastrar</Button>
          </div>
        </div>}


    </div>
          
        

  );
}

export default Login;
