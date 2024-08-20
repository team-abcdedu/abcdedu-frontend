import { ReactNode, useState } from 'react';

interface propsType {
  defaultDisplay: ReactNode;
  children: ReactNode;
}

function Dropdown(props: propsType) {
  const { defaultDisplay, children } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <li>
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {defaultDisplay}
        </div>
        {isHovering && children}
      </li>
    </>
  );
}

export default Dropdown;
