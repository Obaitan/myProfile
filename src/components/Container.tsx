import { ReactNode } from 'react';

const Container = ({
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="px-6 md:px-10 lg:px-12 xl:px-0 w-full xl:w-[1160px] 2xl:w-[1320px] mx-auto">
      {children}
    </div>
  );
};

export default Container;
