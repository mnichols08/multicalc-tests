import { createContext, useState } from 'react';

export const OperandContext = createContext(null);

export function OperandProvider({ children }) {
  const [operand, setOperand] = useState(0);

  return (
    <OperandContext.Provider value={{ operand, setOperand }}>
      {children}
    </OperandContext.Provider>
  );
}