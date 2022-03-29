import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import React, { useEffect, useState } from "react";

import { Body, Container, Header } from "./components";
import { WalletButton } from "./WalletButton";

function App() {
  const [rendered, setRendered] = useState("");

  const ens = useLookupAddress();
  const { account } = useEthers();

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  const name = rendered || account;

  return (
    <Container>
      <Header>
        <WalletButton />
      </Header>
      <Body>
        Hello{name && <strong style={{ marginLeft: 6 }}>{name}</strong>}, welcome to Noman Land.
      </Body>
    </Container>
  );
}

export default App;
