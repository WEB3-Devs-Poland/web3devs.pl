import axios from 'axios';
import { DeleteResponseInterface } from 'interfaces/DeleteResponseInterface';
import { SignatureResponseInterface } from 'interfaces/SignatureResponseInterface';

const API = axios.create({
  baseURL: 'http://localhost:3500'
});

export const getSignatureForContract = (hashedMessage: string, address: string) => API.post<SignatureResponseInterface>(`/whitelist/${address}`, { msg: hashedMessage });
export const deleteAddressFromWhitelist = (address: string) => API.delete<DeleteResponseInterface>(`whitelist/${address}`)