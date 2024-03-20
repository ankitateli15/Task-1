import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { HttpDataSerice } from '../service/http-data.service';

@Component({
  selector: 'app-header',
  // standalone: true,
  // imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  getproduct: undefined | any[]
  product: any[] = [];
  item: any;
  productList: any[] = [];

  constructor(public dialog: MatDialog, private httpServ: HttpDataSerice) { }
  openBuyNowDialog() {
    this.dialog.open(DialogComponent)
  }

  ngOnInit(): void {
    this.getAllProduct();

  }
  getAllProduct() {
    this.httpServ.getproduct().subscribe({
      next: (param: any) => {
        console.log(param)
        this.product = param
        this.product.forEach((a: any) => {
          Object.assign(a, {
            quantity: 0,
            total: a.price
          })
        })
      }
    })

  }
  addToBag(item: any) {
    this.productList.push(item)
    console.log(item);

  }

  quantity: number = 0;

  increaseQuantity(item: { quantity: any; }) {
    if (item.quantity != 5) {
      item.quantity++;
    }
  }

  decreaseQuantity(item: { quantity: any; }) {
    if (item.quantity != 0) {
      item.quantity -= 1
    }
  }



  onDelete(element: any) {
    this.productList.forEach((value, index) => {
      if (value == element) {
        this.productList.splice(index, 1)
      }
    })
  }

  calculateAmount(): number {
    return this.quantity * this.item.price;

  }

}


