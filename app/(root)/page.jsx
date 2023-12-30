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
      <Notification title="-V.1.0.0 About this version" point1="Website is under development" point2="This is a sample notification"/>
      <Navbar/>
      <NavBottom/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
