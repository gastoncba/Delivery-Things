import React, {useContext} from 'react'
import { Button, Icon, Form } from 'semantic-ui-react'
import './DeliveryForm.css'
import {useFormik} from 'formik'
import SelectFormikSemantic from '../SelectFormikSemantic/SelectFormikSemantic'
import { CartContext } from '../../Context/Context'

function DeliveryForm({nextPay}) {

    const {order, setOrder} = useContext(CartContext)

    const validate = values => {
        const errors = {}
        if(!values.cuidad) {
            errors.cuidad = 'Requerido'
        } 

        if(!values.calle) {
            errors.calle = 'Requerido'
        } else if (values.calle.length > 15) {
            errors.calle = 'El nombre debe tener como maximo 15 caracteres...'
        } 
        
        if(!values.numero) {
            errors.numero = 'Requerido'
        } else if (isNaN(parseInt(values.numero))) {
            errors.numero = 'Ingrese un número'
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            cuidad:'',
            calle: '',
            numero:''
        },

        validate,

        onSubmit: values => {
            setOrder({...order, ...values})
            nextPay()
        }
    })

    const cuidades = [
        {value: 'Cordoba' ,label: 'Córdoba'},
        {value: 'Buenos Aires' ,label: 'Buenos Aires'},
        {value: 'Santa Fe', label:'Santa Fe'},
        {value: 'Mendoza',  label: 'Mendoza'}
    ]

    return (
        <div>
            <h1>Datos de Entrega</h1>
            <Form className='delivery-form' onSubmit={formik.handleSubmit}>
            <Form.Field>
            <SelectFormikSemantic 
            name='cuidad' 
            options={cuidades} 
            value={formik.values.cuidad}
            onChange={value => formik.setFieldValue('cuidad', value.value)}/>
            {formik.errors.cuidad  ? (
                <div style={{color:'red'}}>{formik.errors.cuidad}</div>
                ):null}
            </Form.Field>
            <Form.Field>
            <label>Nombre de Calle</label>
            <input 
            name='calle'
            value={formik.values.calle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Nombre de calle' />
            {formik.touched.calle && formik.errors.calle  ? (
                <div style={{color:'red'}}>{formik.errors.calle}</div>
                ):null}
            </Form.Field>
            <Form.Field>
            <label>Número</label>
            <input 
            name='numero'
            value={formik.values.numero}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Número' />
            {formik.touched.numero && formik.errors.numero  ? (
                <div style={{color:'red'}}>{formik.errors.numero}</div>
                ):null}
            </Form.Field>
            <Button type='submit' icon color='red' labelPosition='right'>
                Siguiente
                <Icon name='right arrow' />
            </Button>
        </Form>
        </div>
    )
}

export default DeliveryForm
