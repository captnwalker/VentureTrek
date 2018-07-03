const navigation = document.querySelector('.navigation');
const navCheckbox = navigation.querySelector('.navigation__checkbox');
const navItems = navigation.querySelectorAll('.navigation__item');
navItems.forEach(item =>
  item.addEventListener('click', _ => (navCheckbox.checked = false))
);
