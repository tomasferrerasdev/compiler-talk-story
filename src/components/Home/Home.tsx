import React from 'react';
import { MainAside } from '../MainAside';
import { MainSection } from '../MainSection';

export const Home = () => {
  return (
    <section className="grid h-full w-full grid-cols-12 gap-4">
      <MainSection />
      <MainAside />
    </section>
  );
};
