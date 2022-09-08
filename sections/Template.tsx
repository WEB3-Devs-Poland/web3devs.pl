import type { ReactNode } from 'react';

type LayoutProps = {
  readonly title?: string;
  readonly id: string;
  readonly children: ReactNode;
};

export function Template({ title, id, children }: LayoutProps) {
  return (
    <section id={id} className="max-w-6xl mx-auto bg-black flex flex-col justify-center">
      {/* <div className="text-4xl font-bold text-white md:mb-8 mb-4 text-center">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-550 to-purple-550 flex justify-center">
          {title}
        </h2>
      </div> */}

      {children}
    </section>
  );
}
