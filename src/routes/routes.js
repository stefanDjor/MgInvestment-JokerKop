// honestdig rute
import { Home } from '../page/Home/Home';
import { Contact } from '../page/Contact/Contact'
import { JokerKop } from '../page/JokerKop/JokerKop';
import { MgInvestment } from '../page/MgInvestment/MgInvestment';


export const routes = [
  
  {
    path: '/',
    Component: Home,
    name: 'Home',
  },
  {
    path: '/mg-investment',
    Component: MgInvestment,
    name: 'Mginvestment',
  },
  {
    path: '/joker-kop',
    Component: JokerKop,
    name: 'Jokerkop',
  },
  {
    path: '/contact',
    Component: Contact,
    name: 'Contact',
  },
  
  
  
]
