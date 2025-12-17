export type ProductData = {
  id: string;
  image: Record<"thumbnail" | "mobile" | "tablet" | "desktop", string>;
  name: string;
  category: string;
  price: number;
};

const productsData: ProductData[] = [
  {
    id: "c54c9691-a271-4aec-8427-c80832b4bbb6",
    image: {
      thumbnail: "/images/image-waffle-thumbnail.jpg",
      mobile: "/images/image-waffle-mobile.jpg",
      tablet: "/images/image-waffle-tablet.jpg",
      desktop: "/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    id: "b252584e-72a1-4aba-bc2c-3c118b995741",
    image: {
      thumbnail: "/images/image-creme-brulee-thumbnail.jpg",
      mobile: "/images/image-creme-brulee-mobile.jpg",
      tablet: "/images/image-creme-brulee-tablet.jpg",
      desktop: "/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    id: "aa09b4f1-0765-4d64-b4d1-0d681a67c8f3",
    image: {
      thumbnail: "/images/image-macaron-thumbnail.jpg",
      mobile: "/images/image-macaron-mobile.jpg",
      tablet: "/images/image-macaron-tablet.jpg",
      desktop: "/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    id: "d2e13f17-72ac-4380-ad93-9b1655cb97f9",
    image: {
      thumbnail: "/images/image-tiramisu-thumbnail.jpg",
      mobile: "/images/image-tiramisu-mobile.jpg",
      tablet: "/images/image-tiramisu-tablet.jpg",
      desktop: "/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    id: "c29fc096-fcfa-4e84-982e-27038b082717",
    image: {
      thumbnail: "/images/image-baklava-thumbnail.jpg",
      mobile: "/images/image-baklava-mobile.jpg",
      tablet: "/images/image-baklava-tablet.jpg",
      desktop: "/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    id: "7cde9a1b-3e45-45d0-8df7-d27d2fd071c8",
    image: {
      thumbnail: "/images/image-meringue-thumbnail.jpg",
      mobile: "/images/image-meringue-mobile.jpg",
      tablet: "/images/image-meringue-tablet.jpg",
      desktop: "/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    id: "b55a2415-348d-4faf-ba6d-2098513be6d2",
    image: {
      thumbnail: "/images/image-cake-thumbnail.jpg",
      mobile: "/images/image-cake-mobile.jpg",
      tablet: "/images/image-cake-tablet.jpg",
      desktop: "/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    id: "b444cb7e-120e-4a8f-8392-2de06acbc1cf",
    image: {
      thumbnail: "/images/image-brownie-thumbnail.jpg",
      mobile: "/images/image-brownie-mobile.jpg",
      tablet: "/images/image-brownie-tablet.jpg",
      desktop: "/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    id: "aa05da1a-6bac-4129-acb3-5c2ef361dab0",
    image: {
      thumbnail: "/images/image-panna-cotta-thumbnail.jpg",
      mobile: "/images/image-panna-cotta-mobile.jpg",
      tablet: "/images/image-panna-cotta-tablet.jpg",
      desktop: "/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];

export default productsData;
