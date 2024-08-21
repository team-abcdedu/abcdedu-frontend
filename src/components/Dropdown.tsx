import { ReactNode, useState } from 'react';

interface propsType {
  defaultDisplay: ReactNode;
  children: ReactNode;
  containerClassName?: string;
}

function Dropdown(props: propsType) {
  const { defaultDisplay, children, containerClassName } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div
        className={`overflow-hidden ${containerClassName}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {defaultDisplay}
        <div
          className={`flex flex-col justify-center ${isHovering ? 'animate-dropdown' : ''}`}
        >
          {isHovering && children}
        </div>
      </div>
    </>
  );
}

export default Dropdown;
