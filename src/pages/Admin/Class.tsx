function Class() {
  return (
    <div className={'w-full h-full flex flex-col gap-20'}>
      <h1 className={'text-30 font-semibold'}>클래스 관리</h1>
      <form className={'w-1/2 h-1/3 py-10 px-20 flex flex-col gap-10 shadow '}>
        <table>
          <thead>
            <tr>
              <td>클래스명</td>
              <td>타입</td>
              <td>설명</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input />
              </td>
              <td>
                <input />
              </td>
              <td>
                <textarea />
              </td>
            </tr>
          </tbody>
        </table>

        <button className={'col-span-2'}>클래스 등록</button>
      </form>
      <div className={'w-full h-3/5 shadow'}>
        <h2>서브 클래스 등록</h2>
      </div>
    </div>
  );
}

export default Class;
