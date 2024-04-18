interface ProductProps {
  id: string;
  name: string;
  value: number;
  quantity: number;
  img: string
}

export class Product implements ProductProps {
  id: string;
  name: string;
  value: number;
  quantity: number;
  img: string;

  constructor(id: string, name: string, value: number, quantity: number, img: string) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.quantity = quantity;
    this.img = img
  }
}
