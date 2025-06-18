import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterTypes } from "@/types/filters";

type FilterOriginProps = {
    setFilterOrigin: (taste: string) => void
}

const FilterOrigin  = (props: FilterOriginProps) => {
    const {setFilterOrigin} = props
    const {result, loading}: FilterTypes = useGetProductField()
    return(
        <div className="my-5">
            <p className="mb-3 font-bold">Tipos de Servicios</p>
            {loading && result == null && (
                <p>Cargando...</p>
            )}

            <RadioGroup onValueChange={(value) => setFilterOrigin(value)}>
                {result !== null && result.schema.taste.enum.map((taste: string)=> (
                    <div key={taste} className="flex items-center space-x-2">
                        <RadioGroupItem value={taste} id={taste}/>
                        <Label htmlFor={taste}>{taste}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    )
}


export default FilterOrigin;