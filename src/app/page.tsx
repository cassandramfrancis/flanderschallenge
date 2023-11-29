'use client';

import Image from 'next/image'
import { Heading } from '../components/heading'
import { Login, LoginProps } from '../components/login'
import { useStore } from '../components/store';
import { Logout } from '../components/logout';
import { useState } from 'react';

export default function Home() {
  const { state, dispatch } = useStore();
  const [err, setErr] = useState<string | null>(null);

  const onLoginHandler: LoginProps['onSubmit'] = (evt) => {
    evt.preventDefault();

    const data = new FormData(evt.currentTarget);

    fetch(`/api/login?username=${data.get('username')}&password=${data.get('password')}`)
      .then((result) => result.json())
      .then(result => {
        if (result.login) {
          dispatch({ type: 'set_loggedIn', data: true });
          setErr(null);
        }
        if (result.error) {
          setErr(result.error);
        }
        return;
      })
      .catch(err => {
        // Overly simplistic for sample
        setErr(err);
      });

  };

  const onLogoutHandler: LoginProps['onSubmit'] = () => {
    dispatch({ type: 'set_loggedIn', data: false });
  };

  return (
    <main className="container mx-auto m-8">
      <Image alt="Flanders Image" src="/image.jpg" width="640" height="480" className="max-w-sm my-4 box-border rounded-md" style={{overflow: 'hidden'}} />
      <Heading>Flanders Frontend Coding Challenge</Heading>
      
      {state.loggedIn
        ?
        <>
          <p>Logged in!</p>
          <Logout onSubmit={onLogoutHandler} />
        </>
        :
        <>
          <p>Please login below</p>
          {err && <strong>Error: {err}</strong>}
          <Login onSubmit={onLoginHandler} />
        </>
      }
    </main>
  )
}
