import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;
  const modules = import.meta.glob('../pages/*.svx');
  const module = await modules[`../pages/${slug}.svx`]?.();

  if (!module) {
    error(404, 'Not Found');
    return;
  }

  const { default: page, metadata } = module;

  return {
    title: metadata.title,
    headings: metadata.headings,
    page,
  };
};
