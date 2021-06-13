import getTags from 'vitepress-tags'

export const pages = getTags('./')

export const nav = [
  {
    text: 'Theory',
    link: '/theory/',
    items: pages.theory,
  },
  {
    text: 'Practice',
    link: '/practice/',
    items: pages.practice,
  },
  {
    text: 'Shop',
    link: '/shop/',
    items: pages.shop,
  },
  {
    text: 'Support',
    link: '/support/',
    items: pages.support,
  },
  {
    text: 'Contact',
    link: '/contact/',
    items: pages.contact,
  },
]

export const sidebar = {
  '/': [
    {
      text: 'Theory',
      link: '/theory/',
      children: pages.theory,
    },
    {
      text: 'Practice',
      link: '/practice/',
      children: pages.practice,
    },
    {
      text: 'Shop',
      link: '/shop/',
      children: pages.shop,
    },
    {
      text: 'Support',
      link: '/support/',
      children: pages.support,
    },
    {
      text: 'Contact',
      link: '/contact/',
      children: pages.contact,
    },
  ],
}

export const ru_nav = [
  // {
  //   text: 'Теория',
  //   link: '/ru/theory/',
  //   items: pages.ru_theory,
  // },
  // {
  //   text: 'Практика',
  //   link: '/ru/practice/',
  //   items: pages.ru_practice,
  // },
  // {
  //   text: 'Магазин',
  //   link: '/ru/shop/',
  //   items: pages.ru_shop,
  // },
  // {
  //   text: 'Поддержка',
  //   link: '/ru/support/',
  //   items: pages.ru_support,
  // },
  {
    text: 'Контакты',
    link: '/ru/contact/',
    items: pages.ru_contact,
  },
]

export const ru_sidebar = {
  '/': [
    // {
    //   text: 'Теория',
    //   link: '/ru/theory/',
    //   children: pages.ru_theory,
    // },
    // {
    //   text: 'Практика',
    //   link: '/ru/practice/',
    //   children: pages.ru_practice,
    // },
    // {
    //   text: 'Магазин',
    //   link: '/ru/shop/',
    //   children: pages.ru_shop,
    // },
    // {
    //   text: 'Поддержка',
    //   link: '/ru/support/',
    //   children: pages.ru_support,
    // },
    {
      text: 'Контакты',
      link: '/ru/contact/',
      children: pages.ru_contact,
    },
  ],
}
