import { homeworkRequiredFieldItems } from '@/pages/Admin/constants/form';

function RequiredField() {
  return (
    <li
      className={
        'w-full min-h-fit flex flex-col justify-between p-10 border-3 rounded-md gap-10 bg-white [&_label]:w-full'
      }
    >
      {homeworkRequiredFieldItems.map(item => (
        <label key={item.label} className={'grid grid-cols-8 items-center'}>
          <span className={'text-center font-medium'}>{item.label}</span>
          {item.type === 'input' ? (
            <input
              name={item.name}
              className={'col-span-7 py-3 px-10 border-3 rounded-md'}
              placeholder={item.placeholder}
              required={item.required}
            />
          ) : (
            <textarea
              name={item.name}
              className={'col-span-7 h-full py-3 px-10 border-3 rounded-md'}
              placeholder={item.placeholder}
              required={item.required}
            />
          )}
        </label>
      ))}
    </li>
  );
}

export default RequiredField;
