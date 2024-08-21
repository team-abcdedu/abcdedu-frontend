import { ReactNode, useState } from 'react';

interface propsType {
  defaultDisplay: ReactNode;
  children: ReactNode;
  containerClassName?: string;
  contentsContainerClassName?: string;
}

function Dropdown(props: propsType) {
  const {
    defaultDisplay,
    children,
    containerClassName,
    contentsContainerClassName,
  } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div
        className={`w-100 ${containerClassName}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {defaultDisplay}
        <div className={'overflow-hidden'}>
          <li
            className={`flex flex-col justify-center overflow-hidden ${isHovering ? 'animate-dropdown' : ''} ${contentsContainerClassName}`}
          >
            {isHovering && children}
          </li>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
