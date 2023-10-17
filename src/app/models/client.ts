import { ClientIdentification } from "./client-identification";

export class Client {
    clientId: string;
    email: string;
    dateOfBirth: string;
    country: string;
    postalCode: string;
    clientIdentification: ClientIdentification;
  
    constructor(
      clientId: string,
      email: string,
      dateOfBirth: string,
      country: string,
      postalCode: string,
      clientIdentification: ClientIdentification
    ) {
      this.clientId = clientId;
      this.email = email;
      this.dateOfBirth = dateOfBirth;
      this.country = country;
      this.postalCode = postalCode;
      this.clientIdentification = clientIdentification;
    }
  }
  