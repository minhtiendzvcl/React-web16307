import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductType } from '../types/product';
import {read} from '../api/product'

type ProductEditProps = {
    onUpdate:(product : ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}

const ProductEdit  = (props: ProductEditProps) =>{
    const {id} = useParams();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>()
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async() =>{
            const {data} = await read(id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        // console.log(data);
        props.onUpdate(data)
         navigate('/admin/product');
    }
    return(
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder='Name san pham'{...register('name')} />
            <input type="text" placeholder='Price san pham'{...register('price')} />
            <button>Update</button>
        </form>
    )




}


export default ProductEdit