'use client';

import React from 'react';
import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader';
import AdminSidebar from '../navigation/AdminSidebar';

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AdminHeader />
      <main className="bg-white mt-6 rounded shadow">
        <div className="d-flex flex-column flex-sm-row">
          <AdminSidebar />
          <div className="flex-grow-1 p-4">{children}</div>
        </div>
      </main>
      <AdminFooter />
    </>
  );
}
