import FormErrorMessage from '@/components/FormErrorMessage';
import MessageModal from '@/components/MessageModal';
import Modal from '@/components/Modal';
import Timer from '@/components/Timer';
import useEmailVerification from '@/hooks/auth/useEmailVerification';
import useBoundStore from '@/stores';

export default function EmailVerification() {
  const setAuthModalType = useBoundStore(state => state.setAuthModalType);

  const {
    isMailSent,
    isPending,
    register,
    fieldRules,
    errors,
    onRequestCodeSubmit,
    onVerifyFormSubmit,
    timer,
    timerKey,
    isMsgModalVisible,
    toggleMsgModal,
    resultErrorMsg,
  } = useEmailVerification();

  const fieldStyle = 'flex flex-col gap-4 [&>label]:text-14';
  const btnStyle =
    'bg-primary-400 text-white rounded-md disabled:bg-primary-400/15';

  return (
    <form>
      <Modal.Content>
        <div className='-mt-28'>
          <h2 className='text-24 font-semibold mb-24'>회원가입</h2>
          <div className='flex flex-col gap-12'>
            <div className={fieldStyle}>
              <label htmlFor='email'>이메일</label>
              <div className='flex justify-between gap-8'>
                <input
                  {...register('email', fieldRules.email)}
                  id='email'
                  type='text'
                  className='input-primary w-full !pr-40'
                  placeholder='johndoe@gmail.com'
                />
                <button
                  type='button'
                  className={`${btnStyle} w-104 h-45 px-12 text-14 shrink-0 font-medium`}
                  onClick={onRequestCodeSubmit}
                  disabled={isPending}
                >
                  {isMailSent ? '재요청' : '인증번호 요청'}
                </button>
              </div>
              {errors.email && <FormErrorMessage fieldErrors={errors.email} />}
            </div>
            <div className={fieldStyle}>
              <label htmlFor='code'>인증번호</label>
              <div className='flex justify-between gap-8'>
                <div className='w-full relative'>
                  <input
                    {...register('code', fieldRules.code)}
                    id='code'
                    type='text'
                    className='input-primary w-full !pr-40'
                  />
                  {isMailSent && (
                    <Timer
                      initialTime={timer}
                      timerKey={timerKey}
                      className='absolute right-6 text-12 h-48 leading-[48px] text-red-500'
                    />
                  )}
                </div>
              </div>
              {errors.code && <FormErrorMessage fieldErrors={errors.code} />}
            </div>
            {isMailSent && (
              <p className='text-13 text-neutral-500'>
                인증번호가 메일로 발송되었습니다.
              </p>
            )}
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <button
          type='button'
          onClick={onVerifyFormSubmit}
          className={`${btnStyle} w-full h-45 px-24 text-15 font-semibold`}
          disabled={isPending || !isMailSent}
        >
          다음
        </button>
        <button
          type='button'
          className='text-14 text-primary-400'
          onClick={() => setAuthModalType('login')}
        >
          이미 계정이 있으신가요? 로그인하기
        </button>
      </Modal.Actions>
      <MessageModal
        isVisible={isMsgModalVisible}
        onClose={toggleMsgModal}
        type={'error'}
        backdrop={false}
        message={resultErrorMsg}
      />
    </form>
  );
}
