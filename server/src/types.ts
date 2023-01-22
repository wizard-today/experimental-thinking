export type User = {
  id: string
  ip: string

  name: string
  sex: string
  age: number
  mood: number

  variant: number
  attempts: number[]
}

export type Users = Map<string, User>
