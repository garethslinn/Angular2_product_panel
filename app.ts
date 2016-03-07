import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
  selector: 'productApp',
  template: `
    <div *ngFor="#product of products">
        <h2 class="ui header">{{ product.productType }}</h2>
        <div class="row">
            <div class="col-sm-6 col-md-3" *ngFor="#p of product.items">
                <div class="thumbnail">
                  <img class="image" src="{{p.img}}">
                  <div class="caption">
                    <h3 class="name">{{ p.name }}</h3>
                    <p class="price">&pound;{{ p.price }}</p>
                    <p><a href="#" class="btn btn-primary" role="button">{{ buy }}</a></p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    `
})
class ProductPanel {

  products: Object;

  constructor() {

    this.products = [
      {
          productType: 'Fruit',
          items: [
              { id: '1001', name: 'Apples', img: 'src/images/apple.jpg', price: '0.50' },
              { id: '1002', name: 'Oranges', img: 'src/images/orange.jpg', price: '0.60' },
              { id: '1003', name: 'Pears', img: 'src/images/pear.jpg', price: '0.80' }
          ]
      },
      {
          productType: 'Cheese',
          items: [
              { id: '2001', name: 'Bleu des Causses', img: 'src/images/cheese.jpg', price: '1.49' },
              { id: '2002', name: 'Crottin de Chavignol', img: 'src/images/cheese.jpg', price: '2.22' },
              { id: '2003', name: 'Langres', img: 'src/images/cheese.jpg', price: '3.32' },
              { id: '2004', name: 'Maroilles', img: 'src/images/cheese.jpg', price: '10.32' },
              { id: '2005', name: 'Bleu des Causses', img: 'src/images/cheese.jpg', price: '1.49' },
              { id: '2006', name: 'Crottin de Chavignol', img: 'src/images/cheese.jpg', price: '2.22' },
              { id: '2007', name: 'Langres', img: 'src/images/cheese.jpg', price: '3.32' },
              { id: '2008', name: 'Maroilles', img: 'src/images/cheese.jpg', price: '10.32' }
          ]
      }
    ];
  };
}

bootstrap(ProductPanel);
