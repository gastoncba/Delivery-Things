import React, {useState, useContext} from 'react'
import {Icon, Segment, Step, Message} from 'semantic-ui-react'
import DeliveryForm from '../../Components/DeliveryForm/DeliveryForm'
import FormPay from '../../Components/FormPay/FormPay'
import OrderConfirm from '../../Components/OrderConfirm/OrderConfirm'
import './Order.css'
import {useHistory} from 'react-router-dom'

function Order() {

    const [confirm, setConfirm] = useState(false)
    const [payComplete, setPayComplete] = useState(false)
    const [payDisabled, setPayDisabled] = useState(true)
    const [truckComplete, setTruckComplete] = useState(false)
    const [truckDisabled, setTruckDisabled] = useState(false)
    const [confComplete, setConfComplete] = useState(false)
    const [confDisabled, setConfDisabled] = useState(true)
    const history = useHistory()

    const nextPay = () => {
      setTruckComplete(true)
      setTruckDisabled(true)
      setPayDisabled(false)
    }
    const prevDataDelivery = () => {
      setTruckComplete(false)
      setTruckDisabled(false)
      setPayComplete(false)
      setPayDisabled(true)
    }

    const prevDataPayment = () => {
      setPayComplete(false)
      setPayDisabled(false)
      setConfComplete(false)
      setConfDisabled(true)
    }

    const nextConfirm = () => {
      setPayComplete(true)
      setPayDisabled(true)
      setConfDisabled(false)
    }

    const nextFinal = () => {
      setConfComplete(true)
      setConfDisabled(true)
      setConfirm(true)
    }
    
    const goMain = () => {
      setTimeout(()=> {
        history.push('/')
      },7500)
    }

    return (
        <div>
          {!confirm ? <div>
            <Step.Group style={{width:'100vw'}}>
    <Step completed={truckComplete} disabled={truckDisabled}>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Datos de entrega</Step.Title>
      </Step.Content>
    </Step>

    <Step completed={payComplete} disabled={payDisabled}>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Forma de Pago</Step.Title>
      </Step.Content>
    </Step>

    <Step completed={confComplete} disabled={confDisabled}>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Comfirmar Pedido</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
  <Segment basic textAlign='center'>
  {!truckDisabled && 
      <DeliveryForm nextPay={nextPay}></DeliveryForm>
  }
  {!payDisabled &&
  <FormPay nextConfirm={nextConfirm} prev={prevDataDelivery}></FormPay>
  }
  {!confDisabled &&
    <OrderConfirm nextFinal={nextFinal} prev={prevDataPayment}></OrderConfirm>
  }
  </Segment>
  </div>:
  <Message positive className='confirm-message'>
    {goMain()}
    <Message.Header>¡Orden registrada con éxito!</Message.Header>
    <p>
    ¡Recibirá una notificación cuando esté en su hogar!
    </p>
    <p>¡Suerte y Gracias!</p>
  </Message>}
  </div>
    )
}

export default Order
