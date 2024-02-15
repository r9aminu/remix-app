import React, { ReactNode } from 'react';

interface AppProps {
  children: ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  return (
    <div>
      <nav>
        {/* Add navigation links here */}
      </nav>
      {children}
    </div>
  );
};

export default App;
