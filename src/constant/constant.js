import home from '../assets/images/home.png';
import search from '../assets/images/search.png';
import list from '../assets/images/list.png';
import user from '../assets/images/user.png';

const constant = {
  menu: [
    {
      id: 1,
      title: 'home',
      component: 'Home',
      icon: home,
    },
    {
      id: 2,
      title: 'search',
      component: 'Search',
      icon: search,
    },
    {
      id: 3,
      title: 'list',
      component: 'List',
      icon: list,
    },
    {
      id: 4,
      title: 'login',
      component: 'Login',
      icon: user,
    },
  ],
};
export default constant;
