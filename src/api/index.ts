import axios from 'axios';
import { SignatureResponseInterface } from 'interfaces/SignatureResponseInterface';

const API = axios.create({
  baseURL: 'http://localhost:3500'
});

export const getSignatureForContract = (hashedMessage: string) => API.post<SignatureResponseInterface>('/whitelist/signature', { msg: hashedMessage });