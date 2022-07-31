import axios, { AxiosResponse } from 'axios'
import { API_URL } from './constants';

class PaymentApi {
  private client

  constructor() {
    this.client = axios;
  }

  getPaymentsList(): Promise<AxiosResponse> {
    return this.client.get(API_URL)
  }
}

export default new PaymentApi()
