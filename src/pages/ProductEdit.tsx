import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from '../types/product';

type productEditProps = {
    onUpdate:( product : ProductType ) => void 

}
type FromInputs = {
    name : string ,
    price : number ,

}


