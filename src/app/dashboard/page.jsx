"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';
import { Footer } from '@/components/Footer';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('https://api.swappable.com/auth', { method: 'GET' });

        if (response.status === 403) {
          // If forbidden, redirect to login
          router.push('/login');
        } else if (response.ok) {
          const data = await response.json();
          if (data.token) {
            // Token received, keep user on dashboard
            console.log('User is authenticated');
          }
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        // router.push('/login');

      }
    };

    checkAuth();
  }, [router]);

  return (
    <>
      <main>
        <Sidebar />
        {/* Other dashboard content */}
      </main>
      <Footer />
    </>
  );
}
