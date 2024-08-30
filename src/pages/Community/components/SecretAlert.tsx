function SecretAlert() {
  return (
    <div className='fixed top-1/2 left-1/2 bg-white shadow-lg rounded-lg p-6 w-80 sm:w-96'>
      <p className='text-center text-gray-700'>
        비밀글은 작성자와 관리자만 볼 수 있습니다.
      </p>
    </div>
  );
}

export default SecretAlert;
