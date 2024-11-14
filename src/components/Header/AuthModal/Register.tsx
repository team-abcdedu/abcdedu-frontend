import FormErrorMessage from '@/components/FormErrorMessage';
import Modal from '@/components/Modal';
import useRegisterForm from '@/hooks/auth/useRegisterForm';
import useBoundStore from '@/stores';

// 필수 항목 *
function RequiredAsterisk() {
  return <span className='text-red-500'>*</span>;
}

export default function Register() {
  const fieldStyle = 'flex flex-col gap-4 [&>label]:text-14';
  const email = useBoundStore(state => state.verifiedEmail);

  const { isRegisterButtonDisabled, errors, fieldRules, register, onSubmit } =
    useRegisterForm({
      email: email ?? '',
    });

  if (!email) return null;

  return (
    <>
      <Modal.Content>
        <form id='register' className='-mt-28' onSubmit={onSubmit}>
          <h2 className='text-24 font-semibold mb-24'>회원가입</h2>
          <div className='flex flex-col gap-12'>
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
              <label htmlFor='email'>이메일</label>
              <input
                {...register('email', fieldRules.email)}
                id='email'
                type='text'
                value={email}
                className='input-primary text-neutral-500 bg-zinc-100'
                disabled
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
          </div>
        </form>
      </Modal.Content>
      <Modal.Actions>
        <button
          form='register'
          type='submit'
          className='w-full h-45 px-24 bg-primary-400 text-15 
        text-white font-semibold rounded-md disabled:bg-primary-400/15'
          disabled={isRegisterButtonDisabled}
        >
          가입하기
        </button>
      </Modal.Actions>
    </>
  );
}
