import FilterCategories from '../filters/filter-categories';
import CityLogin from '../city/city-login';
import Landing from '../landing/landing';

function PoliticalNews(){
    return(
        <>
        <FilterCategories/>
        < CityLogin/>
        <Landing/>
            <h1>Political News</h1>
        </>
    )
}
export default PoliticalNews;