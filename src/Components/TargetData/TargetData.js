import React from 'react'
import { Button, Form, Modal, Icon } from 'semantic-ui-react'
import {useFormik} from 'formik'
import './TargetData.css'

function TargetData({initialState, open, close, addTarget}) {

    const toDate = (fecha) => {
      let newFormat = fecha.split("/")
      return newFormat[2]+"/"+newFormat[1]+"/"+ newFormat[0]
    }

    const validate = value => {
      const errors = {}

      if(!value.numero) {
        errors.numero = 'Requerido'
      } else if(!/^(\d\s?){15,16}$/.test(value.numero)) {
        errors.numero = 'Número de targeta invalido'
      }

      if(!value.fecha) {
        errors.fecha = 'Requerido'
      } else if(!/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/.test(value.fecha)) {
        errors.fecha = 'Formato de fecha invalido, ingresa una fecha formato dd/mm/yyyy o dd-mm-yyyy'
      } else if(new Date(toDate(value.fecha)) < new Date()) {
        errors.fecha = 'Tarjeta vencida'
      }

      if(!value.cvc) {
        errors.cvc = 'Requerido'
      } else if(!/^([0-9]|[0-9]|[0-9])/.test(value.cvc)) {
        errors.cvc = 'Codigo de seguridad invalido'
      } 

      if(!value.nombre) {
        errors.nombre = 'Requerido'
      } else if(value.nombre.length > 15) {
        errors.nombre = 'El nombre debe tener como maximo 15 caracteres...'
      }
      
      return errors
    }

    const formik = useFormik({
      initialValues: {
        numero:'',
        fecha: '',
        cvc: '',
        nombre: ''
      },
      validate, 

      onSubmit: values => {
        close()
        addTarget()
      }
    })
    return (
        <Modal
      onClose={() => close()}
      onOpen={() => open()}
      open={initialState}>
      <Modal.Header>
        <Icon name='payment'></Icon>
        Agregar Tarjeta
        </Modal.Header>
      <Modal.Content>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Field>
          <label>Número de la tarjeta</label>
          <input 
          name={'numero'}
          value={formik.values.numero}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Numero de 15 o 16 digitos' />
          {formik.touched.numero && formik.errors.numero  ? (
                <div style={{color:'red'}}>{formik.errors.numero}</div>
                ):null}
        </Form.Field>
        <Form.Field>
          <label>Expiración</label>
          <input 
          name={'fecha'}
          value={formik.values.fecha}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='dd/mm/yyyy o dd-mm-yyyy' />
          {formik.touched.fecha && formik.errors.fecha  ? (
                <div style={{color:'red'}}>{formik.errors.fecha}</div>
        ):null}
        </Form.Field>
        <Form.Field>
          <label>Código de seguridad</label>
          <input 
          name={'cvc'}
          value={formik.values.cvc}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='cvc' />
          {formik.touched.cvc && formik.errors.cvc  ? (
                <div style={{color:'red'}}>{formik.errors.cvc}</div>
        ):null}
        </Form.Field>
        <Form.Field>
          <label>Nombre titular</label>
          <input 
          name={'nombre'}
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Juan Perez' />
          {formik.touched.nombre && formik.errors.nombre  ? (
                <div style={{color:'red'}}>{formik.errors.nombre}</div>
        ):null}
        </Form.Field>
        <Button className='button-add-target' type='submit' circular={true} color='red'>continuar</Button>
        <Button className='button-add-target cancel' circular={true} secondary onClick={() => {
          close()
          formik.resetForm()
          }}>Cancelar</Button>
        </Form>
      </Modal.Content>
    </Modal>
    )
}

export default TargetData
