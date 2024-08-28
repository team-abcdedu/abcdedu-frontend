import { ReactNode, useState } from 'react';

interface PropsType {
  defaultLabel: ReactNode;
  children: ReactNode;
  listContainerStyle?: string;
}

function Dropdown(props: PropsType) {
  const { defaultLabel, children, listContainerStyle } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={'relative grid place-items-center'}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`grid place-items-center`}>{defaultLabel}</div>
      {isHovering && (
        <ul
          className={`top-full absolute min-w-max pt-3 overflow-hidden ${listContainerStyle}`}
        >
          <li
            className={`py-7 px-10 flex flex-col-center gap-7 bg-white ${isHovering ? 'animate-dropdown' : ''}`}
          >
            {children}
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
