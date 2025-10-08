import Contacts from '@/app/home/Contacts/Contacts';
import Hero from '@/app/home/Hero/Hero';
import {Services} from '@/app/home/Services/Services';
import Faq from '@/app/home/Faq/Faq';
import Prices from '@/app/home/Prices/Prices';
import Dashboard from '@/app/home/Dashboard/Dashboard';
import Articles from '@/app/home/Articles/Articles';


export default function Home() {
  return (
    <div>
        <Hero/>
        <Services/>
        <Faq/>
        <Prices/>
        <Dashboard/>
        <Articles/>
        <Contacts/>
    </div>
  );
}
