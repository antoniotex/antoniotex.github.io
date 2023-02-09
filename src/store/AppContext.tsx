import React, { createContext, ReactElement, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import dark from '../common/styles/themes/dark';
import light from '../common/styles/themes/light';
import usePersistedState from '../hooks/usePersistedState';
import formspreeApi from '../services/formspreeeApi';

type ContextProvider = {
  children: ReactElement;
};

type ContextProps = {
  loading: boolean;
  theme: any;
  toggleTheme: any;
  contact: {
    submitted: boolean;
    errorMessage: string;
  };
  sendEmailMessage: any;
  modal: {
    open: boolean;
    toggleModal: any;
  };
};

const initialParams: ContextProps = {
  loading: false,
  theme: null,
  toggleTheme: () => {},
  contact: {
    submitted: false,
    errorMessage: '',
  },
  modal: {
    open: false,
    toggleModal: () => {},
  },
  sendEmailMessage: () => {},
};

export const AppContext = createContext(initialParams);

const AppContextProvider: React.FC<ContextProvider> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleModal = () => {
    if (!open) {
      setSubmitted(false);
    }

    setOpen(!open);
  };

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  const sendEmailMessage = async (data: any) => {
    setLoading(true);

    try {
      const response = await formspreeApi.post('contactForm', data);
      setSubmitted(true);
    } catch (error: any) {
      setErrorMessage(
        'Erro ao enviar email. Tente novamente em instantes ou me escreva em antoniotx.dev@gmail.com'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        theme,
        toggleTheme,
        contact: { submitted, errorMessage },
        modal: { open, toggleModal },
        sendEmailMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
