import React from "react";

// Navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Best Selling",
    url: "/best-selling",
  },
  {
    title: "Products",
    url: "/products",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];

// Branding Data
export const brandingData = [
  {
    id: 1,
    title: "Free Shipping",
    description: "From all orders over 100$",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1H5.63636V24.1818H35"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M8.72763 35.0002C10.4347 35.0002 11.8185 33.6163 11.8185 31.9093C11.8185 30.2022 10.4347 28.8184 8.72763 28.8184C7.02057 28.8184 5.63672 30.2022 5.63672 31.9093C5.63672 33.6163 7.02057 35.0002 8.72763 35.0002Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M31.9073 35.0002C33.6144 35.0002 34.9982 33.6163 34.9982 31.9093C34.9982 30.2022 33.6144 28.8184 31.9073 28.8184C30.2003 28.8184 28.8164 30.2022 28.8164 31.9093C28.8164 33.6163 30.2003 35.0002 31.9073 35.0002Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M34.9982 1H11.8164V18H34.9982V1Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M11.8164 7.18164H34.9982"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Daily Surprise Offers",
    description: "Save up to 25% off",
    icon: (
      <svg
        width="32"
        height="34"
        viewBox="0 0 32 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31 17.4502C31 25.7002 24.25 32.4502 16 32.4502C7.75 32.4502 1 25.7002 1 17.4502C1 9.2002 7.75 2.4502 16 2.4502C21.85 2.4502 26.95 5.7502 29.35 10.7002"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M30.7 2L29.5 10.85L20.5 9.65"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Affordable Prices",
    description: "Get Factory direct price",
    icon: (
      <svg
        width="32"
        height="35"
        viewBox="0 0 32 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 13H5.5C2.95 13 1 11.05 1 8.5V1H7"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M25 13H26.5C29.05 13 31 11.05 31 8.5V1H25"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M16 28V22"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
        ></path>
        <path
          d="M16 22C11.05 22 7 17.95 7 13V1H25V13C25 17.95 20.95 22 16 22Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M25 34H7C7 30.7 9.7 28 13 28H19C22.3 28 25 30.7 25 34Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
  {
    id: 5,
    title: "Secure Payments",
    description: "100% protected payments",
    icon: (
      <svg
        width="32"
        height="38"
        viewBox="0 0 32 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.6654 18.667H9.33203V27.0003H22.6654V18.667Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M12.668 18.6663V13.6663C12.668 11.833 14.168 10.333 16.0013 10.333C17.8346 10.333 19.3346 11.833 19.3346 13.6663V18.6663"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
        <path
          d="M31 22C31 30.3333 24.3333 37 16 37C7.66667 37 1 30.3333 1 22V5.33333L16 2L31 5.33333V22Z"
          stroke="#FFBB38"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="square"
        ></path>
      </svg>
    ),
  },
];

// categories data
export const categoriesData = [
  {
    id: 1,
    title: "Computers and Laptops",
    subTitle: "",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838",
  },
  {
    id: 2,
    title: "Cosmetics and Body Care",
    subTitle: "",
    imageUrl:
      "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-07/kosme1.png",
  },
  {
    id: 3,
    title: "Accessories",
    subTitle: "",
    imageUrl:
      "https://img.freepik.com/free-vector/ordering-goods-online-internet-store-online-shopping-niche-e-commerce-website-mother-buying-babies-clothes-footwear-toys-infant-accessories_335657-2345.jpg?w=2000",
  },
  {
    id: 4,
    title: "Clothes",
    subTitle: "",
    imageUrl:
      "https://www.shift4shop.com/2015/images/industries/clothing/clothing-apparel.png",
  },
  {
    id: 5,
    title: "Shoes",
    subTitle: "",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
  },
  {
    id: 6,
    title: "Gifts",
    subTitle: "",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKs02TwAnaoj0XPxNX94aAapvxIzk41BbOjJJa9-Bj5DdWpaG_LXuAYc0aDcaS0gTV_aw&usqp=CAU",
  },
  {
    id: 7,
    title: "Pet Care",
    subTitle: "",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RM9MqAqw52MIjqzYn3rf2fJjtzxdJimGJw&usqp=CAU",
  },
  {
    id: 8,
    title: "Mobile and Tablets",
    subTitle: "",
    imageUrl:
      "https://st-troy.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/mpwp3tua-apple-iphone-14-256gb-mavi-mpwp3tua-637986832343472449.jpg",
  },
  {
    id: 9,
    title: "Music and Gaming",
    subTitle: "",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png",
  },
  {
    id: 10,
    title: "Others",
    subTitle: "",
    imageUrl:
      "https://searchspring.com/wp-content/uploads/2022/10/Hero-Image-Platform-Others-2.png",
  },
];

// product Data
export const productData = [
  {
    id: 1,
    category: "Computers and Laptops",
    name: "MacBook Pro M2 chipset 256GB SSD 8GB RAM space-gray color with Apple 1 year warranty",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help potential customers to make informed decisions about the products they are interested in buying. A well-written product description can also be a powerful marketing tool that can help increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    imageUrl: [
      {
        publicId: "test",
        url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_EMEA_LANG_FR?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1654021658445",
      },
      {
        publicId: "test",
        url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_EMEA_LANG_FR?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1654021658445",
      },
    ],
    shop: {
      name: "Apple Inc.",
      shopAvatar: {
        publicId: "test",
        url: "https://www.mega.pk/items_images/Apple+MacBook+Air+M2+Chip+MLY33+8GB+Ram+256GB+SSD+Midnight+Price+in+Pakistan%2C+Specifications%2C+Features_-_23441.webp",
      },
      ratings: 4.2,
    },
    price: 1099,
    discountPrice: 1049,
    rating: 4,
    totalSell: 35,
    stock: 10,
  },
  {
    id: 2,
    category: "Mobile and Tablets",
    name: "iPhone 14 Pro Max 256GB SSD and 8GB RAM silver color",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help potential customers to make informed decisions about the products they are interested in buying. A well-written product description can also be a powerful marketing tool that can help increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    imageUrl: [
      {
        publicId: "test",
        url: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SX679_.jpg",
      },
      {
        publicId: "test",
        url: "https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SX679_.jpg",
      },
    ],
    shop: {
      name: "Amazon Ltd",
      shopAvatar: {
        publicId: "test",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      },
      ratings: 4.2,
    },
    discountPrice: 1099,
    rating: 5,
    totalSell: 80,
    stock: 10,
  },
  {
    id: 3,
    category: "Others",
    name: "New Fashionable Watch for men 2023 with multiple colors",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help potential customers to make informed decisions about the products they are interested in buying. A well-written product description can also be a powerful marketing tool that can help increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    imageUrl: [
      {
        publicId: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
      {
        publicId: "test",
        url: "https://i0.wp.com/eccocibd.com/wp-content/uploads/2022/01/1802NL02_1.png?fit=550%2C550&ssl=1",
      },
    ],
    shop: {
      name: "Shahriar Watch House",
      shopAvatar: {
        publicId: "test",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      },
      ratings: 4.2,
    },
    price: 100,
    discountPrice: 79,
    rating: 4,
    totalSell: 12,
    stock: 10,
  },{
    id: 4,
    category: "Shoes",
    name: "New Trend shoes for gents with all sizes",
    description: "Product details are a crucial part of any eCommerce website or online marketplace. These details help potential customers to make informed decisions about the products they are interested in buying. A well-written product description can also be a powerful marketing tool that can help increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    imageUrl: [
      {
        publicId: "shoes1",
        url: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvBQPQMVNRd6TtDkGs2dCri0Y-rxKkFOiEWw&usqp=CAU",
      },
      {
        publicId: "shoes2",
        url: "https://unsplash.com/photos/white-and-blue-nike-air-force-1-high-jvoZ-Aux9aw",
      },
    ],
    shop: {
      name: "Alisha Shoes Mart",
      shopAvatar: {
        publicId: "test",
        url: "https://via.placeholder.com/150/000000/FFFFFF/?text=Amazon+Logo",
      },
      ratings: 4.2,
    },
    price: 120,
    discountPrice: 89,
    rating: 5,
    totalSell: 49,
    stock: 10,
  },      
  {
    id: 5,
    category: "Music and Gaming",
    name: "Gaming Headphone Asus with multiple color and free delivery",
    description:
      "Product details are a crucial part of any eCommerce website or online marketplace. These details help potential customers to make informed decisions about the products they are interested in buying. A well-written product description can also be a powerful marketing tool that can help increase sales. Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
    imageUrl: [
      {
        publicId: "test",
        url: "https://www.startech.com.bd/image/cache/catalog/headphone/havit/h763d/h763d-02-500x500.jpg",
      },
      {
        publicId: "test",
        url: "https://eratablet.com/wp-content/uploads/2022/08/H51ba6537405f4948972e293927673546u.jpg",
      },
    ],
    shop: {
      name: "Asus Ltd",
      shopAvatar: {
        publicId: "test",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      },
      ratings: 4.2,
    },
    price: 300,
    discountPrice: 239,
    rating: 4.5,
    reviews: [
      {
        user: {
          // user object will be here
        },
        comment: "It's so cool!",
        rating: 5,
      },
    ],
    totalSell: 20,
    stock: 10,
  },
];

export const footerProductLinks = [
  {
    name: "About us",
    link: "/about",
  },
  {
    name: "Careers",
    link: "/careers",
  },
  {
    name: "Store Locations",
    link: "/store-locations",
  },
  {
    name: "Our Blog",
    link: "/blog",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
];

export const footerCompanyLinks = [
  {
    name: "Game & Video",
    link: "/game-video",
  },
  {
    name: "Phone & Tablets",
    link: "/phones-tablets",
  },
  {
    name: "Computers & Laptops",
    link: "/computers-laptops",
  },
  {
    name: "Sport Watches",
    link: "/sport-watches",
  },
];

export const footerSupportLinks = [
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "Reviews",
    link: "/reviews",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
  {
    name: "Shipping",
    link: "/shipping",
  },
  {
    name: "Live Chat",
    link: "/live-chat",
  },
];
