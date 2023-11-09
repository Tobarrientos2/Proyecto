import type { PageLoad } from "../../$types";
    export const load: PageLoad = ({ params }) => {
	return {
		page: {
			title: `${params.slug}`,
			content: `${params.slug}`,
		},
        
        
	};
};
