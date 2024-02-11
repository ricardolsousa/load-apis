import React, { createContext, useState, FC, ReactNode } from 'react';

// Definir os tipos para os dados
type Data = [] | null;

type Headers = {} | null;

type Configs = {} | null;

// Definir o tipo para o objeto contendo todos os dados
type ApiData = {
  data: Data;
  headers: Headers;
  configs: Configs;
  statusCode: number | null;
};

// Criar o contexto
type ApiDataContextType = {
  apiData: ApiData;
  updateApiData: (newData: Partial<ApiData>) => void;
};

const initialApiData: ApiData = {
  data: null,
  headers: null,
  configs: null,
  statusCode: null
};

export const ApiDataContext = createContext<ApiDataContextType>({
  apiData: initialApiData,
  updateApiData: () => {},
});

// Componente do Context Provider
export const ApiDataProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // Definir o estado para o objeto contendo todos os dados
  const [apiData, setApiData] = useState<ApiData>(initialApiData);

  // Função para atualizar os dados, headers e configs
  const updateApiData = (newData: Partial<ApiData>) => {
    setApiData(prevState => ({
      ...prevState,
      ...newData,
    }));
  };

  return (
    // Prover o estado e função para os componentes filhos
    <ApiDataContext.Provider value={{ apiData, updateApiData }}>
      {children}
    </ApiDataContext.Provider>
  );
};
