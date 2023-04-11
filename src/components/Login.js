import { useState } from 'react';
import { login, selectUser } from '../redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
      })
    );
  };

  return (
    <div>
      {!user && (
        <form>
          <h1>Login</h1>
          <p>
            <input
              type="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
              Enviar
            </button>
          </p>
          <hr />
        </form>
      )}
    </div>
  );
};
