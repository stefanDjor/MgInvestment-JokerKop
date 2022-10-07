// honestdig rute
import { Home } from '../page/Home/Home';
import { Contact } from '../page/Contact/Contact'
import { JokerKop } from '../page/JokerKop/JokerKop';
import { MgInvestment } from '../page/MgInvestment/MgInvestment';


export const routes = [
  
  {
    path: '/',
    Component: Home,
    name: 'Pocetna',
  },
  {
    path: '/mg-investment',
    Component: MgInvestment,
    name: 'MG Investment',
  },
  {
    path: '/joker-kop',
    Component: JokerKop,
    name: 'Joker Kop',
  },
  {
    path: '/contact',
    Component: Contact,
    name: 'Kontakt',
  },
]
