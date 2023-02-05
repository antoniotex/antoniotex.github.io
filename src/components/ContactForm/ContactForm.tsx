import { useForm } from 'react-hook-form';
import * as S from './styles.css';

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValid },
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  return (
    <S.Container
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <S.Title>Deixe uma mensagem</S.Title>
      <S.InputContainer>
        <S.Label htmlFor='name'>Nome</S.Label>
        <S.Input
          id='name'
          type='text'
          placeholder='Ex.: Ana Lucia'
          {...register('name', {
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
        <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>
      </S.InputContainer>
      <S.InputContainer>
        <S.Label htmlFor='email'>E-mail</S.Label>
        <S.Input
          id='email'
          type='email'
          placeholder='Ex.: anabanana@gmail.com'
          {...register('email', {
            required: 'O endereço de e-mail é um campo obrigatório',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Por favor, digite um e-mail válido',
            },
          })}
        />
        <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
      </S.InputContainer>
      <S.InputContainer>
        <S.Label htmlFor='message'>Mensagem</S.Label>
        <S.TextArea
          id='message'
          placeholder='Ex.: Gostamos do seu trabalho e queremos você em nossa equipe =)'
          {...register('message', {
            maxLength: {
              value: 600,
              message: 'A mensagem deve ser menor do que 600 caracteres',
            },
          })}
        />
        <S.ErrorMessage>{errors.message?.message}</S.ErrorMessage>
      </S.InputContainer>
      <S.SubmitButton disabled={!isValid}>Enviar</S.SubmitButton>
    </S.Container>
  );
};

export default ContactForm;
