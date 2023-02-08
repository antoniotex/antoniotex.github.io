import { useForm } from 'react-hook-form';
import * as S from './styles.css';
import formspreeApi from '../../services/formspreeeApi';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../store/AppContext';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const { sendEmailMessage, loading, contact } = useContext(AppContext);

  const contactForm = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (contact.submitted) {
      setName(contactForm.watch().name.split(' ')[0]);
      contactForm.reset();
    }
  }, [contact.submitted]);

  return contact.submitted ? (
    <S.SubmittedContainer>
      <S.SubmittedTitle>Mensagem enviada</S.SubmittedTitle>
      <S.SubmittedDescription>
        Olá {name}, recebi sua mensagem e responderei o mais breve possível =)
      </S.SubmittedDescription>
    </S.SubmittedContainer>
  ) : (
    <S.Container
      onSubmit={contactForm.handleSubmit((data) => {
        sendEmailMessage(data);
      })}
    >
      <S.Title>Deixe uma mensagem</S.Title>
      <S.InputContainer>
        <S.Label htmlFor='name'>Nome</S.Label>
        <S.Input
          id='name'
          type='text'
          placeholder='Ex.: Ana Lucia'
          disabled={loading}
          {...contactForm.register('name', {
            required: 'O campo nome é obrigatório',
            minLength: {
              value: 2,
              message: 'O nome deve ter entre 2 e 100 caracteres',
            },
            maxLength: {
              value: 100,
              message: 'O nome deve ter entre 2 e 100 caracteres',
            },
          })}
        />
        <S.ErrorMessage>
          {contactForm.formState.errors.name?.message}
        </S.ErrorMessage>
      </S.InputContainer>
      <S.InputContainer>
        <S.Label htmlFor='email'>E-mail</S.Label>
        <S.Input
          id='email'
          type='email'
          placeholder='Ex.: anabanana@gmail.com'
          disabled={loading}
          {...contactForm.register('email', {
            required: 'O campo endereço de e-mail é obrigatório',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Por favor, digite um e-mail válido',
            },
          })}
        />
        <S.ErrorMessage>
          {contactForm.formState.errors.email?.message}
        </S.ErrorMessage>
      </S.InputContainer>
      <S.InputContainer>
        <S.Label htmlFor='message'>Mensagem</S.Label>
        <S.TextArea
          id='message'
          placeholder='Ex.: Gostamos do seu trabalho e queremos você em nossa equipe =)'
          disabled={loading}
          {...contactForm.register('message', {
            maxLength: {
              value: 600,
              message: 'A mensagem deve ser menor do que 600 caracteres',
            },
          })}
        />
        <S.ErrorMessage>
          {contactForm.formState.errors.message?.message}
        </S.ErrorMessage>
      </S.InputContainer>
      <S.SubmitButton disabled={!contactForm.formState.isValid || loading}>
        {loading ? 'Enviando' : 'Enviar'}
      </S.SubmitButton>
      <S.ErrorMessage
        hidden={!contact.errorMessage}
        style={{ textAlign: 'center', marginTop: 10 }}
      >
        {contact.errorMessage}
      </S.ErrorMessage>
    </S.Container>
  );
};

export default ContactForm;
