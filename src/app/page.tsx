// 'use client'
// // app/page.tsx
// import { redirect } from 'next/navigation';

// export default function Page() {
//   redirect('/web/home');
// }
'use client';
import dynamic from 'next/dynamic';
import { JSX, useEffect, useState } from 'react';

export default function Home() {
  const [Component, setComponent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    const load = async () => {
      const Comp = isMobile
        ? (await import('./pc/home/page')).default
        : (await import('./pc/home/page')).default;
      setComponent(<Comp />);
    };
    load();
  }, []);

  return Component || <div>Loading...</div>;
}
