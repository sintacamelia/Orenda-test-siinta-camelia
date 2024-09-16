import { Router } from 'express'
import { ProductController } from '@/controllers/products.controller'
import { CreateProductDto } from '@dtos/products.dto'
import { Routes } from '@interfaces/routes.interface'
import { ValidationMiddleware } from '@middlewares/validation.middleware'

export class ProductRoute implements Routes {
  public path = '/products'
  public router = Router()
  public product = new ProductController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.product.getProducts)
    this.router.get(`${this.path}/:id`, this.product.getProductById)
    this.router.post(`${this.path}`, ValidationMiddleware(CreateProductDto), this.product.createProduct)
    this.router.put(`${this.path}/:id`, ValidationMiddleware(CreateProductDto, true), this.product.updateProduct)
    this.router.delete(`${this.path}/:id`, this.product.deleteProduct)
  }
}
