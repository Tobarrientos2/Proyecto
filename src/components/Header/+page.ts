import type { PageLoad } from "../../routes/$types";

export const load: PageLoad = ({ params }) => {
	return {
		page: {
			title: `${params}`,
			content: `${params}`,
		},
        
        
	};
};
