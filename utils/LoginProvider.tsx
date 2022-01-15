import React, { useEffect, useState } from 'react';

interface ContextType {
  user: any | null;
  setUser: any;
  cart: any;
  setCart: any
}
export const LoginContext = React.createContext({} as ContextType);

interface Props {
  children: React.ReactNode;
}
export default function LoginProvider(props: Props) {
  const [user, setUser] = useState<any | null>(null);
  const [cart, setCart] = useState<boolean>(false);


  return (
    <LoginContext.Provider value={{ user, setUser,cart,setCart }}>
      {props.children}
    </LoginContext.Provider>
  );
}