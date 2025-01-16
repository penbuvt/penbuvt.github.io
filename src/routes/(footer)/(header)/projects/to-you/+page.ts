import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return {
    title: 'To You (Original composition)',
    headings: {
      links: { id: 'links', text: 'Links' },
      downloads: { id: 'downloads', text: 'Downloads' },
    },
  };
};
