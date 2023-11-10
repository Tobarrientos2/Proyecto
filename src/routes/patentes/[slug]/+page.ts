import type { PageLoad } from "../../$types";
    export const load: PageLoad = ({ params }) => {
	return {
		page: {
			title: `${params}`,
			content: `${params}`,
		},
        
        
	};
};
