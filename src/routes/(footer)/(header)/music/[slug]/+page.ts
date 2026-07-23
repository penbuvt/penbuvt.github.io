import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;
  const modules = import.meta.glob('../pages/*.svx');
  const { default: page, metadata } = await modules[`../pages/${slug}.svx`]?.();

  return {
    title: metadata.title,
    headings: {
      links: { id: 'links', text: 'Links' },
      downloads: { id: 'downloads', text: 'Downloads' },
    },
    page,
  };
};
