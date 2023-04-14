export interface Product {
  id: number
  name: string
  description: string
  picture: string
  type: {
    id: number
    name: string
  }
  categories: {
    id: number
    name: string
  }[]
  implementationEffortText: string | null
  investmentEffort: string
  trl: {
    id: number
    name: string
  }
  video: string
  user: {
    id: number
    email: string
    firstName: string
    lastName: string
    sex: number
    profilePicture: string
    position: string
  }
  company: {
    name: string
    logo: string
    address: {
      country: {
        name: string
      }
      city: {
        name: string
      }
      street: string
      house: string
      zipCode: string
      longitude: string
      latitude: string
    }
  }
  businessModels: {
    id: number
    name: string
  }[]
}
