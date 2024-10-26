import { X } from '@phosphor-icons/react';

import FormErrorMessage from '@/components/FormErrorMessage';
import Modal from '@/components/Modal';
import useRegisterForm from '@/hooks/auth/useRegisterForm';
import { AuthModalActions } from '@/types/auth';

// 필수 항목 *
function RequiredAsterisk() {
  return <span className='text-red-500'>*</span>;
}

export default function Register({ onClose, onToggle }: AuthModalActions) {
  const fieldStyle = 'flex flex-col gap-4 [&>label]:text-14';

  const { isRegisterButtonDisabled, errors, fieldRules, register, onSubmit } =
    useRegisterForm({
      onSuccess: onToggle,
    });

  return (
    <>
      <Modal.Header>
        <button
          type='button'
          className='block ml-auto mt-4 p-2'
          onClick={onClose}
        >
          <X size={24} />
        </button>
      </Modal.Header>
      <Modal.Content>
        <div className='-mt-28'>
          <h2 className='text-24 font-semibold mb-24'>회원가입</h2>
          <form className='flex flex-col gap-12'>
            <div className={fieldStyle}>
              <label htmlFor='name'>
                이름 <RequiredAsterisk />
              </label>
              <input
                {...register('name', fieldRules.name)}
                id='name'
                type='text'
                className='input-primary'
                placeholder='John Doe'
              />
              {errors.name && <FormErrorMessage fieldErrors={errors.name} />}
            </div>
            <div className={fieldStyle}>
              <label htmlFor='email'>
                이메일 <RequiredAsterisk />
              </label>
              <input
                {...register('email', fieldRules.email)}
                id='email'
                type='text'
                className='input-primary'
                placeholder='johndoe@gmail.com'
              />
              {errors.email && <FormErrorMessage fieldErrors={errors.email} />}
            </div>
            <div className={fieldStyle}>
              <label htmlFor='school'>학교</label>
              <input
                {...register('school', fieldRules.school)}
                id='school'
                type='text'
                className='input-primary'
                placeholder='Affton High School'
              />
            </div>
            <div className={fieldStyle}>
              <label htmlFor='studentId'>학번</label>
              <input
                {...register('studentId', fieldRules.studentId)}
                id='studentId'
                type='number'
                inputMode='numeric'
                pattern='[0-9]*'
                className='input-primary'
                placeholder='12345678'
              />
            </div>
            <div className={fieldStyle}>
              <label htmlFor='password'>
                비밀번호 <RequiredAsterisk />
              </label>
              <input
                {...register('password', fieldRules.password)}
                id='password'
                type='password'
                className='input-primary'
                placeholder='********'
                autoComplete='false'
              />
              {errors.password && (
                <FormErrorMessage fieldErrors={errors.password} />
              )}
            </div>
            <div className={fieldStyle}>
              <label htmlFor='confirmPw'>
                비밀번호 확인 <RequiredAsterisk />
              </label>
              <input
                {...register('confirmPw', fieldRules.confirmPw)}
                id='confirmPw'
                type='password'
                className='input-primary'
                placeholder='********'
                autoComplete='false'
              />
              {errors.confirmPw && (
                <FormErrorMessage fieldErrors={errors.confirmPw} />
              )}
            </div>
          </form>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='submit'
          className='w-full h-45 px-24 bg-primary-300 text-15 
        text-white font-semibold rounded-md disabled:bg-primary-400/15'
          onClick={onSubmit}
          disabled={isRegisterButtonDisabled}
        >
          가입하기
        </button>
        <button
          type='button'
          className='w-full text-14 text-primary-300'
          onClick={onToggle}
        >
          이미 계정이 있으신가요? 로그인하기
        </button>
      </Modal.Actions>
    </>
  );
}
