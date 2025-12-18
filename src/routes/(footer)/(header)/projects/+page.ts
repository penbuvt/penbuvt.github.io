import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    title: 'Projects',
    headings: {
      pages: { id: 'pages', text: 'Pages' },
    },
  };
};
