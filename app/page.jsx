'use client';
import toast from 'react-hot-toast';
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Notification from '@/components/navbar/new-updates/Notification';
import NavBottom from '@/components/navbar/NavBottom';

export default function Home({children}) {
  const successToast = () => {
    toast.success('Done');
  };
  const errorToast = () => {
    toast.error('Try again later');
  };
  const loadingToast = () => {
    toast.loading('Please wait', {
      duration: 1200,
    });
  };
  return (
    <div className="home_section">
      <Notification />
      <Navbar/>
      <NavBottom/>
      <main>
        Home Page
      </main>
      <Footer/>
    </div>
  )
}
