import { useForm } from 'react-hook-form';
import * as S from './styles.css';
import formspreeApi from '../../services/formspreeeApi';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../store/AppContext';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const { sendEmailMessage, loading, contact } = useContext(AppContext);

  const { t } = useTranslation();

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
      <S.SubmittedTitle>{t('contactForm.submitted.title')}</S.SubmittedTitle>
      <S.SubmittedDescription>
        {t('contactForm.submitted.description', { name })} =)
      </S.SubmittedDescription>
    </S.SubmittedContainer>
  ) : (
    <S.Container
      onSubmit={contactForm.handleSubmit((data) => {
        sendEmailMessage(data);
      })}
    >
      <S.Title>{t('contactForm.title')}</S.Title>
      <S.InputContainer>
        <S.Label htmlFor='name'>{t('contactForm.name')}</S.Label>
        <S.Input
          id='name'
          type='text'
          placeholder='Ex.: Ana Lucia'
          disabled={loading}
          {...contactForm.register('name', {
            required: t('contactForm.errors.name.required') as string,
            minLength: {
              value: 2,
              message: t('contactForm.errors.name.length'),
            },
            maxLength: {
              value: 100,
              message: t('contactForm.errors.name.length'),
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
            required: t('contactForm.errors.email.required') as string,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: t('contactForm.errors.email.pattern'),
            },
          })}
        />
        <S.ErrorMessage>
          {contactForm.formState.errors.email?.message}
        </S.ErrorMessage>
      </S.InputContainer>
      <S.InputContainer>
        <S.Label htmlFor='message'>{t('contactForm.message')}</S.Label>
        <S.TextArea
          id='message'
          placeholder={`Ex.: ${t('contactForm.messagePlaceholder')} =)`}
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
        {loading
          ? t('contactForm.sendButton.sending')
          : t('contactForm.sendButton.send')}
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
