import { notFound } from "next/navigation"

    type Props = {
        params: {
            dynamicsearch:string,
        }
    }

    function Search({params: {dynamicsearch}}: Props) {
        if (!dynamicsearch) notFound();
        const search = decodeURI(dynamicsearch);

        // API call to get seach movies
        // API call to get popular movies

        
      return (
        <div>Search Page of {search}</div>
      )
    }
    
    export default Search