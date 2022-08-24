import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: "Admin",
      email: "khan@gmail.com",
      password: bcrypt.hashSync("admin"), //i will hash password
      address: "Uttara-1230, Dhaka Bangladesh",
      phone: "+304092051",
      image: "./assets/images/sellers/ja.jpg",
      isAdmin: true,
    },
    {
      name: "Haque",
      email: "haque@gmail.com",
      password: bcrypt.hashSync("haque"), //i will hash password
      address: "Uttara-1230, Dhaka Bangladesh",
      phone: "+123456789",
      image: "./assets/images/sellers/seller.png",
      isAdmin: false,
    },
  ],

  category: [
    {
      name: "Fruits",
    },
    {
      name: "Vegetables",
    },
  ],

  products: [
    {
      name: "Watermelon",
      slug: "watermelon",
      category: "fruits",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima impedit officia sint odit distinctio praesentium in molestias eveniet est voluptas accusantium maxime perspiciatis consequatur, at consectetur nemo? Amet, ratione. Aliquam sint eum sapiente natus rem illo ducimus temporibus quis, nihil vel reiciendis necessitatibus deleniti dolores quae saepe exercitationem maiores in? Voluptates eveniet libero placeat, iste hic voluptas sunt dicta.",
      price: "1.20",
      image: "./assets/images/products/1.png",
      seller: "Haque",
      sellerImage: "./assets/images/sellers/seller.png",
    },
    {
      name: "Broccoli",
      slug: "broccoli",
      category: "Vegetables",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima impedit officia sint odit distinctio praesentium in molestias eveniet est voluptas accusantium maxime perspiciatis consequatur, at consectetur nemo? Amet, ratione. Aliquam sint eum sapiente natus rem illo ducimus temporibus quis, nihil vel reiciendis necessitatibus deleniti dolores quae saepe exercitationem maiores in? Voluptates eveniet libero placeat, iste hic voluptas sunt dicta.",
      price: "0.95",
      image: "./assets/images/products/2.png",
      seller: "Admin",
      sellerImage: "./assets/images/sellers/ja.jpg",
    },
    {
      name: "Guava",
      slug: "guava",
      category: "fruits",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi minima impedit officia sint odit distinctio praesentium in molestias eveniet est voluptas accusantium maxime perspiciatis consequatur, at consectetur nemo? Amet, ratione. Aliquam sint eum sapiente natus rem illo ducimus temporibus quis, nihil vel reiciendis necessitatibus deleniti dolores quae saepe exercitationem maiores in? Voluptates eveniet libero placeat, iste hic voluptas sunt dicta.",
      price: "1.90",
      image: "./assets/images/products/3.png",
      seller: "Admin",
      sellerImage: "./assets/images/sellers/ja.jpg",
    },
  ],
};

export default data;