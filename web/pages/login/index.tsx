import Router from 'next/router';
import { FormEvent, useState } from "react";
import Swal from 'sweetalert2';

import api from "../api/api";

const Login = () => {
  const [ user, setUser ] = useState('');
  const [ password, setPassword ] = useState('');

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    await api.post('user', { user, password }).then(({ data, status }) => {
      localStorage.setItem('43ca94dd646dbbaa78034918d61043e9', 'b326b5062b2f0e69046810717534cb09');
      Router.push('/admin');
    }).catch(error => {
      console.error(error.response.data);
      Swal.fire({
        icon: 'error',
        title: 'Ops...',
        text: 'Login incorreto!'
      });
    });
  }

  return (
    <section id="login">
      <div className="login-container">
        <form action="" onSubmit={ (ev) => { handleLogin(ev) } }>
          <div className="input-block">
            <label htmlFor="">Usuário</label>
            <input type="text" onChange={ (ev) => { setUser(ev.currentTarget.value) } } />
          </div>

          <div className="input-block">
            <label htmlFor="">Senha</label>
            <input type="password" onChange={ (ev) => { setPassword(ev.currentTarget.value) } } />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </section>
  );
}

export default Login;