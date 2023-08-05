// import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core';
// import React, { useEffect, useState } from 'react';

import { Body, Container, Header } from './components';
import { useU2F } from './u2fHooks';
// import { WalletButton } from './WalletButton';

function App() {
  // const [name, setName] = useState('');

  // const ens = useLookupAddress();
  // const { account } = useEthers();

  useU2F();

  // useEffect(() => {
  //   if (ens) {
  //     setName(ens);
  //   } else if (account) {
  //     setName(shortenAddress(account));
  //   } else {
  //     setName('');
  //   }
  // }, [account, ens, setName]);

  // const buttonText = name || account;

  return (
    <Container>
      <Header>{/* <WalletButton /> */}</Header>
      <Body>Hello, welcome to Noman Land.</Body>
    </Container>
  );
}

export default App;
