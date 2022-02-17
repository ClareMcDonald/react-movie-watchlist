import React from 'react';
import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils.js';

export default function AuthPage({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(email, password);

    setUser(user);
  }
  
  async function handleSignUp() {
    const user = await signUp(email, password);

    setUser(user);
  }

  return (
    <div>
      <h3>The Very Nice Movie WatchList App</h3>
      <form onSubmit={handleSignIn}>
        <label> Email
          <input onChange={e => setEmail(e.target.value)} value={email}/>
        </label>
        <label> Password
          <input onChange={e => setPassword(e.target.value)} value={password} />
        </label>
        <button>SignIn</button>
      </form>
      <button onClick={handleSignUp}>SignUp</button>
    </div>
  );
}
