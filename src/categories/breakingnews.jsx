import FilterCategories from '../filters/filter-categories';
import CityLogin from '../city/city-login';
import Landing from '../landing/landing';

function BreakingNews(){
    
    return(
        <>
        <FilterCategories/>
        < CityLogin/>
        <Landing/>
            <h1>Breaking News</h1>
        </>
    )
}
export default BreakingNews;