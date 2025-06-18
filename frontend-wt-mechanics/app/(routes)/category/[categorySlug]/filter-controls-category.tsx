import FilterOrigin from "../components/filter-origin";

type FilterControlsCategoryProps = {
    setFilterOrigin: (taste: string) => void
}

const FilterControlsCategory = (props: FilterControlsCategoryProps) => {
    const {setFilterOrigin} = props;
    return (
        
       <div className="sm:w-[350px] sm:mt-5 p-6">
        <FilterOrigin setFilterOrigin= {setFilterOrigin}/>
       </div>
    )
}

export default FilterControlsCategory;