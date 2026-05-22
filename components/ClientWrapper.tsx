'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingPage from './LoadingPage';
import CursorStarEffect from './CursorStarEffect';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Show loading for initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Listen for navigation events
  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleStop = () => setIsLoading(false);

    router.prefetch('/');

    // Note: Next.js 13+ doesn't have built-in navigation events in this way
    // This is a simple initial load loader
    return () => {};
  }, [router]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <CursorStarEffect />
      {children}
    </>
  );
}
