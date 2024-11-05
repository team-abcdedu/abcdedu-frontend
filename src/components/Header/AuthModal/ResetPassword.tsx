import FormErrorMessage from '@/components/FormErrorMessage';
import Modal from '@/components/Modal';
import useResetPassword from '@/hooks/auth/useResetPassword';
import useBoundStore from '@/stores';

export default function ResetPassword() {
  const setAuthModalType = useBoundStore(state => state.setAuthModalType);

  const { isMailSent, isPending, errors, register, fieldRules, onSubmit } =
    useResetPassword();

  return (
    <form onSubmit={onSubmit}>
      <Modal.Content>
        <div className='-mt-28'>
          <h2 className='text-24 font-semibold mb-24'>비밀번호 재설정</h2>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-4 [&>label]:text-14'>
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
            {isMailSent && (
              <p className='text-13 text-neutral-500'>
                임시 비밀번호가 메일로 발송되었습니다. 로그인 후 비밀번호를
                변경해 주세요.
              </p>
            )}
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='submit'
          className='w-full h-45 px-24 bg-primary-400 text-15 text-white font-semibold 
          rounded-md disabled:bg-primary-400/15'
          disabled={isPending}
        >
          {isMailSent ? '재발급' : '임시 비밀번호 발급'}
        </button>
        <button
          type='button'
          className='w-full text-14 text-primary-400'
          onClick={() => setAuthModalType('login')}
        >
          로그인으로 돌아가기
        </button>
      </Modal.Actions>
    </form>
  );
}
