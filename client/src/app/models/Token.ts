export interface Token {
  dataUser: {
    id: number,
    name: string,
    email: string,
    accessToken: string,
    expiresIn: string
  }
}
