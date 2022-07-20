import { useEffect } from 'react';

const isLocal = window.location.hostname === 'localhost';

const BASE_URL = isLocal
  ? 'http://127.0.0.1:8787'
  : 'https://api.noman.land/u2f/v1';

export const useU2F = () => {
  useEffect(() => {
    fetch(`${BASE_URL}/token`)
      .then(response => response.json())
      .then(registrationRequest => {
        console.log('BEFORE REGISTER', registrationRequest);
        return window.u2f.register(
          registrationRequest.appId,
          [registrationRequest],
          [],
          registrationResponse => {
            console.log('BEFORE PUT', registrationResponse);
            fetch(`${BASE_URL}/token`, {
              method: 'PUT',
              body: registrationResponse,
            })
              // .then(response => response.json())
              .then(console.log);
          }
        );
      });
  }, []);
};
