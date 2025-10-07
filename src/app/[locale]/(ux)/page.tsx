import HomeFour from '@/app/(layoutFour)/home-four/page';
import React from 'react';

export default async function HomePage({ params }: { params: { locale: string } }) {
  return (
    <>
        <HomeFour/>
    </>
  );
}
