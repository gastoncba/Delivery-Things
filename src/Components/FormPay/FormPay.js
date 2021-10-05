import React, {useState, useContext} from 'react'
import { Form, Radio, Button , Icon} from 'semantic-ui-react'
import TargetData from '../TargetData/TargetData'
import './FormPay.css'
import { CartContext } from '../../Context/Context'

function FormPay({nextConfirm, prev}) {
    const [payment, setPayment] = useState('Efectivo')
    const [disabledBtnTarget, setDisabledBtnTarget] = useState(true)  
    const [stateTargetData, setStateTargetData] = useState(false)
    const [disabledBtnContinue, setDisabledBtnContinue] = useState(false)

    const {order, setOrder} = useContext(CartContext)
    
    const handleChange = (e, {value}) => {
      e.preventDefault()
      setPayment(value)
    }

    const openTarget = () => {
      setStateTargetData(true)
      setDisabledBtnTarget(true)
    }

    const closeTarget = () => {
      setStateTargetData(false)
      setDisabledBtnContinue(false)
      setPayment('Efectivo')
    }

    const continueToConfirm = () => {
      setOrder({...order, formaPago:payment})
      nextConfirm()
    }

    const prevStep = () => {
      prev()
    }

    return (
        <div>
        <h1>Metodo de Pago</h1>
        <Form>
        <Form.Field>
          <Radio
            label='Efectivo'
            name='radioGroup'
            value='Efectivo'
            checked={payment === 'Efectivo'}
            onChange={handleChange}
            onClick={()=>{
              setDisabledBtnTarget(true)
              setDisabledBtnContinue(false)
            }}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Tarjeta'
            name='radioGroup'
            value='Tarjeta'
            checked={payment === 'Tarjeta'}
            onChange={handleChange}
            onClick={()=>{
              setDisabledBtnTarget(false)
              setDisabledBtnContinue(true)
            }}
          />
        </Form.Field>
        <Button color='red' circular={true} disabled={disabledBtnTarget} onClick={() => openTarget()}>Agregar Tarjeta</Button>
      </Form>
      <TargetData initialState={stateTargetData} open={openTarget} close={closeTarget} addTarget={continueToConfirm}></TargetData>
      <div className='next-previous'>
        <Button icon secondary labelPosition='left' onClick={() => prevStep()}>
        <Icon name='left arrow' />
        Atras
        </Button>
        <Button icon color='red' labelPosition='right' disabled={disabledBtnContinue} onClick={() => continueToConfirm()}>
          Continuar
          <Icon name='right arrow' />
          </Button>
      </div>
      </div>
    )
}

export default FormPay
