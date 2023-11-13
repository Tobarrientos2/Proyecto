import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => { return 
    { info: { 
        slug: `${params.slug}`
            }
    }; 
};

export const ssr = true;

export const csr = false;
