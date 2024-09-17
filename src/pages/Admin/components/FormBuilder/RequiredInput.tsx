const requiredInputItems = [
  { label: '제목', type: 'input', name: 'title' },
  { label: '부제목', type: 'input', name: 'subTitle' },
  { label: '설명', type: 'textarea', name: 'description' },
  { label: '추가 내용', type: 'textarea', name: 'additionalDescription' },
];

function RequiredInput() {
  return (
    <li
      className={
        'w-full min-h-fit flex flex-col justify-between p-10 border-3 rounded-md gap-10 bg-white [&_label]:w-full'
      }
    >
      {requiredInputItems.map(item => (
        <label key={item.label} className={'grid grid-cols-8 items-center'}>
          <span className={'text-center font-medium'}>{item.label}</span>
          {item.type === 'input' ? (
            <input
              name={item.name}
              type={'text'}
              className={'col-span-7 py-3 px-10 border-3 rounded-md'}
            />
          ) : (
            <textarea
              name={item.name}
              className={'col-span-7 h-full py-3 px-10 border-3 rounded-md'}
            />
          )}
        </label>
      ))}
    </li>
  );
}

export default RequiredInput;
