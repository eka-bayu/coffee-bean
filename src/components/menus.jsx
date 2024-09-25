const menus = [
  {
    id: 1,
    name: "Americano",
    description: "Espresso with hot water",
    price: 25000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Coffee",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 2,
    name: "Latte",
    description: "Espresso with steamed milk",
    price: 30000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Coffee",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 3,
    name: "Cappuccino",
    description: "Espresso with steamed milk foam",
    price: 30000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Coffee",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 4,
    name: "Espresso",
    description: "Strong black coffee",
    price: 20000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Coffee",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 5,
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk",
    price: 35000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Coffee",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 6,
    name: "Cold Brew",
    description: "Slow-steeped, small-batch and smooth",
    price: 21000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Coffee",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 7,
    name: "Green Tea Latte",
    description: "Matcha green tea with steamed milk",
    price: 30000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Non-Coffee",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 8,
    name: "Hot Chocolate",
    description: "Steamed milk with mocha-flavored syrup",
    price: 28000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Non-Coffee",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 9,
    name: "Caramel Frappuccino",
    description: "Blended coffee with caramel syrup",
    price: 35000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Non-Coffee",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 10,
    name: "Chicken Sandwich",
    description: "Grilled chicken with fresh veggies",
    price: 47000,
    image: `${process.env.PUBLIC_URL}/images/hamburger.png`,
    category: "Food & Snack",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 11,
    name: "Croissant",
    description: "Buttery and flaky croissant",
    price: 20000,
    image: `${process.env.PUBLIC_URL}/images/pancake.png`,
    category: "Food & Snack",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 12,
    name: "Muffin",
    description: "Blueberry muffin",
    price: 21000,
    image: `${process.env.PUBLIC_URL}/images/pancake.png`,
    category: "Food & Snack",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 13,
    name: "Peppermint Mocha",
    description: "Espresso with peppermint flavor and chocolate",
    price: 24000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Seasonal",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 14,
    name: "Seasonal Lemon Latte",
    description: "Espresso with lemon spice flavor",
    price: 27000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Seasonal",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
  {
    id: 15,
    name: "Seasonal Apple Latte",
    description: "Espresso with apple spice flavor",
    price: 27000,
    image: `${process.env.PUBLIC_URL}/images/coffee-cup.png`,
    category: "Seasonal",
    getFormattedPrice() {
      return `Rp. ${this.price.toLocaleString("id-ID")}`;
    },
  },
];

export default menus;
