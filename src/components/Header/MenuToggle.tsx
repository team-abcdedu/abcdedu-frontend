function Path(props: {
  d: string;
  className: string;
  variants?: { [key: string]: { d: string } };
  opacity?: string;
}) {
  return (
    <path
      fill='transparent'
      strokeWidth='3'
      stroke='#000090'
      strokeLinecap='round'
      {...props}
    />
  );
}

function MenuToggle({ toggle }: { toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className='bg-transparent relative z-[102] outline-none border-none select-none cursor-pointer px-10 flex-col-center rounded-full'
    >
      <svg width='23' height='18' viewBox='0 0 23 18' className={'relative'}>
        <Path
          d='M 2 2.5 L 20 2.5'
          className={'top'}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path d='M 2 9.423 L 20 9.423' opacity='1' className={'middle'} />
        <Path
          d='M 2 16.346 L 20 16.346'
          className={'bottom'}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
}

export default MenuToggle;
