import { useEffect } from 'react';

const isDeployed = window.location.hostname === 'noman.land';

const domain = isDeployed
  ? 'https://api.noman.land'
  : `https://${window.location.hostname}:8787`;

const TOKEN_URL = `${domain}/u2f/v1/token`;

const get = url => fetch(url).then(response => response.json());

const putToken = body =>
  fetch(TOKEN_URL, {
    method: 'PUT',
    body: JSON.stringify(body),
  }).then(response => response.json());

const registerKeyRemotely = registrationResponse =>
  console.log('BEFORE PUT', registrationResponse) ||
  putToken(registrationResponse)
    .then(e => console.log('error after put', e))
    .catch(e => console.error('catch after put', e));

const registerKey = registrationRequest =>
  console.log('after FETCH, registration request', registrationRequest) ||
  navigator.credentials.create(
    registrationRequest.appId,
    [registrationRequest],
    [],
    registerKeyRemotely
  );

export const useU2F = () => {
  useEffect(() => {
    get(TOKEN_URL).then(registerKey);
  }, []);
};
