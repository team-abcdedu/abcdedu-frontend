import { ReactNode, useState } from 'react';

interface propsType {
  defaultDisplay: ReactNode;
  children: ReactNode;
  defaultDisplayClassName?: string;
  contentsContainerClassName?: string;
}

function Dropdown(props: propsType) {
  const {
    defaultDisplay,
    children,
    defaultDisplayClassName,
    contentsContainerClassName,
  } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={'grid place-items-center'}>
      <div
        className={`overflow-hidden`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={`grid place-items-center ${defaultDisplayClassName}`}>
          {defaultDisplay}
        </div>
        {isHovering && (
          <div className={'overflow-hidden absolute'}>
            <li
              className={`flex flex-col gap-3 bg-white ${isHovering ? 'animate-dropdown' : ''} ${contentsContainerClassName}`}
            >
              {children}
            </li>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
