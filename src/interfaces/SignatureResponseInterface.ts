export interface SignatureResponseInterface {
  whitelisted: boolean;
  sig?: string;
  error?: boolean;
  msg?: string;
}