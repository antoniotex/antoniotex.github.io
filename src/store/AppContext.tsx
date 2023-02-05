import { AxiosError } from 'axios';
import React, { createContext, ReactElement, useState } from 'react';
import formspreeApi from '../services/formspreeeApi';

type ContextProvider = {
  children: ReactElement;
};

type ContextProps = {
  loading: boolean;
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

  const toggleModal = () => {
    if (!open) {
      setSubmitted(false);
    }

    setOpen(!open);
  };

  const sendEmailMessage = async (data: any) => {
    console.log(data);
    setLoading(true);

    try {
      const response = await formspreeApi.post('contactForm', data);
      console.log(response.data);
      setSubmitted(true);
    } catch (error: any) {
      console.log(error.message);
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
