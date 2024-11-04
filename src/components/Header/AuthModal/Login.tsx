import FormErrorMessage from '@/components/FormErrorMessage';
import Modal from '@/components/Modal';
import useLoginForm from '@/hooks/auth/useLoginForm';
import useBoundStore from '@/stores';
import { AuthFormProps } from '@/types/auth';

export default function Login({ onSuccess }: AuthFormProps) {
  const fieldStyle = 'flex flex-col gap-4 [&>label]:text-14';

  const setAuthModalType = useBoundStore(state => state.setAuthModalType);

  const { isLoginButtonDisabled, fieldRules, errors, register, onSubmit } =
    useLoginForm({
      onSuccess,
    });

  return (
    <form onSubmit={onSubmit}>
      <Modal.Content>
        <div className='-mt-28'>
          <h2 className='text-24 font-semibold mb-24'>로그인</h2>
          <div className='flex flex-col gap-12 mb-4'>
            <div className={fieldStyle}>
              <label htmlFor='email'>이메일</label>
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
              <label htmlFor='password'>비밀번호</label>
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
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='submit'
          className='w-full h-45 px-24 bg-primary-400 text-15 
        text-white font-semibold rounded-md disabled:bg-primary-400/15'
          disabled={isLoginButtonDisabled}
        >
          로그인
        </button>
        <div className='w-full flex-row-center text-14'>
          <button
            type='button'
            className='mx-8 relative text-14 text-primary-400'
            onClick={() => setAuthModalType('register')}
          >
            계정 생성하기
          </button>
          <p className='w-1 h-21 relative pipe-after'></p>
          <button
            type='button'
            className='ml-21 text-14 text-primary-400'
            onClick={() => setAuthModalType('reset_password')}
          >
            비밀번호 재설정
          </button>
        </div>
      </Modal.Actions>
    </form>
  );
}
