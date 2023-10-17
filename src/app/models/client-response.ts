export class ClientResponse {
    clientId: string;
    email: string;
    token: string;
  
    constructor(clientId: string, email: string, token: string) {
      this.clientId = clientId;
      this.email = email;
      this.token = token;
    }
  }
  