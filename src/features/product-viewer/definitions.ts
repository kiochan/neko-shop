export enum ViewerMode {
  Grid = 'grid',
  List = 'list',
}

export type Product = {
  id: number
  name: string
  description: string
  price: number
  imageUrl: string
}

export type ProductQuery = {
  offset?: number
  size?: number
}
