import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import PaymentApi from '../api/payment'

const Home: NextPage = () => {
  const [payments, setPayments] = useState([])

  const fetchPayments = async () => {
    try {
      const { data: payments } = await PaymentApi.getPaymentsList()
      console.log('payments: ', payments)
      setPayments(payments)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => void fetchPayments(), [])

  return (<div>{payments.map((payment, i) => <p key={i}>{`${payment.id} - ${payment.description}`}</p>)}</div>)
}

export default Home
