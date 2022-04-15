import axios from "axios";
import {useQueries} from "react-query";

const fetchSuperHero = (heroId) => {
    return axios.get(`https://localhost:4000/superheroes/${heroId}`)
};

export const DynamicParallelPage = ({heroIds}) => {
    const queryResults = useQueries(heroIds.map(id => {
        return {
            queryKey: ['super_hero', id],
            queryFn: () => fetchSuperHero(id),
        }
    }))
    console.log(queryResults);
    return <div>Dynamic Parallel Page</div>
}
