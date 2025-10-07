import HeroFour from '@/components/sections/heros/heroFour';
import React from 'react';

export default async function HomePage({ params }: { params: { locale: string } }) {
  return (
    <>
        <HeroFour/>
    </>
  );
}
