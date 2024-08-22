import { ReactNode, useState } from 'react';

interface PropsType {
  defaultLabel: ReactNode;
  children: ReactNode;
  defaultLabelStyle?: string;
  contentsContainerStyle?: string;
}

function Dropdown(props: PropsType) {
  const { defaultLabel, children, defaultLabelStyle, contentsContainerStyle } =
    props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className={'grid place-items-center'}>
      <div
        className={`overflow-hidden`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className={`grid place-items-center ${defaultLabelStyle}`}>
          {defaultLabel}
        </div>
        {isHovering && (
          <div className={'overflow-hidden absolute'}>
            <li
              className={`flex flex-col gap-6 bg-white py-6 ${isHovering ? 'animate-dropdown' : ''} ${contentsContainerStyle}`}
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
