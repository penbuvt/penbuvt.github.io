import type { PageLoad } from './$types';
import { metadata } from './+page.svx';

export const load: PageLoad = () => {
  return {
    title: metadata.title,
    headings: {
      links: { id: 'links', text: 'Links' },
      downloads: { id: 'downloads', text: 'Downloads' },
    },
  };
};
