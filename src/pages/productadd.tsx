import { useForm, SubmitHandler } from "react-hook-form"
import { ProductType } from "../types/product";
import { Navigate, useNavigate } from 'react-router-dom'
type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormValues = {

    name: string,
    price: number,
};
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        props.onAdd(data);
        navigate('/admin/product');
    }
    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3" >
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" {...register('name', { required: true, minLength: 5 })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    {errors.name && errors.name.type === "required" && <span>Required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">price</label>
                    {errors.name && errors.name.type === "minLength" && <span>Min Lenghth</span>}
                    <input type="number" {...register('price')} className="form-control" id="exampleInputPassword1"/>
                </div>
                <button>add</button>
            </form>



           
        </div>
    )

}
export default ProductAdd