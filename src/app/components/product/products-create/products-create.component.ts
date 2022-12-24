import { Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../product.module";

@Component({
  selector: "app-products-create",
  templateUrl: "./products-create.component.html",
  styleUrls: ["./products-create.component.css"],
})
export class ProductsCreateComponent implements OnInit {
  product: Product = {
    name: "",
    price: null,
  };
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct() {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado!");
      this.router.navigate(["/products"]);
    });
  }

  cancel() {
    this.router.navigate(["/products"]);
  }
}
