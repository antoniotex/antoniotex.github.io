import { useForm } from 'react-hook-form';
import * as S from './styles.css';
import formspreeApi from '../../services/formspreeeApi';
import { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const contactForm = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const sendMessage = async (data: any) => {
    setLoading(true);
    try {
      const response = await formspreeApi.post('contactForm', data);
      console.log(response);
      setSubmitted(true);
      await contactForm.reset();
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return submitted ? (
    <button>Obrigado pessoal!</button>
  ) : (
    <S.Container
      onSubmit={contactForm.handleSubmit((data) => {
        sendMessage(data);
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
            required: 'O seu nome é campo obrigatório',
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
            required: 'O endereço de e-mail é um campo obrigatório',
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
    </S.Container>
  );
};

export default ContactForm;
