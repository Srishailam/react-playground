
interface MenuItem {
  title: string;
  subItems: MenuItem[];
}

export const data = [
  {
    title: 'Home',
    subItems: []
  },
  {
    title: 'Services',
    subItems: ['For entrepreneurs', 'For students', 'For hobbyists']
  },
  {
    title: 'Contact',
    subItems: []
  },
  {
    title: 'About',
    subItems: ['Team', 'Locations', 'Careers', 'Press']
  }
];