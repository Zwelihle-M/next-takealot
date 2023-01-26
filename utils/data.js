import bcrypt from "bcryptjs"

const data = {

  users:[{
    name:"Senzo",
    email:"senzoadmin@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: true,
  },
  {
    name:"Zweli",
    email:"zweliuser@gmail.com",
    password: bcrypt.hashSync("123456"),
    isAdmin: false,
  },

  ],
  products:[

    {
      name: "MSI Raider GE76",
      slug: "MSI Raider ",
      category: "laptops",
      image: "/images/msi.png",
      price: 75000,
      brand: "Msi",
      rating: 2,
      numReviews: 12,
      countInStock: 20,
      description: "GE76 Raider is equipped with the NEW 12th Gen. Intel® Core™ i7 processors and powered by NVIDIA® GeForce RTX™ 3080 8GB graphics, 32GB RAM and a 1TB NVMe SSD for super fast load times. Just as the spaceship traversing throughout the universe by warp speed with extreme performance, the GE76 landed at the gaming battlefield fully-armed. With the most comprehensive features, GE76 Raider will bring gamers to infinity and beyond.",
    },
    {
      name: "ROG Zephyrus Duo 16 ",
      slug: "ROG Zephyrus Duo 16(2022)  ",
      category: "laptops",
      image: "/images/rog.png",
      price: 80000,
      brand: "Asus",
      rating: 5,
      numReviews: 234,
      countInStock: 27,
      description: "The ROG Zephyrus Duo 16 (2022) GX650RW-932512B0W is a high-end gaming laptop produced by ASUS under its ROG (Republic of Gamers) brand. It features a unique dual-screen design, with a main 16-inch display and a second 14-inch touchscreen that can be used as an extended display or as a control surface for gaming and other tasks. The laptop is powered by an Intel Core i9 processor and an NVIDIA GeForce RTX 3090 graphics card, making it capable of running demanding games and other applications at high settings. It also has a large amount of RAM and storage, and features built-in cooling technology to prevent overheating. It also has the capability to connect to other devices via WiFi 6 and Thunderbolt 4.",
    },
     {
      name: "Apple MacBook Pro",
      slug: "MacBook Pro 16-inch with Apple M1",
      category: "laptops",
      image: "/images/macbook.png",
      price: 48000,
      brand: "Apple",
      rating: 4,
      numReviews: 6,
      countInStock: 12,
      description: "The MacBook Pro M1 is a high-performance laptop from Apple, which is powered by Apple's own M1 chip, based on ARM architecture. This laptop is available in 13-inch and 16-inch screen size options. It has a Retina display with True Tone technology and a resolution of 2560x1600 pixels. It features 8-core and 10-core CPU options, and up to 32GB of unified memory. It also has integrated graphics and an option for an additional discrete GPU. It has a built-in storage capacity of up to 2TB SSD,",
    },

    {
      name:"Samsung Galaxy S22 Ultra ",
      slug:"Samsung Galaxy S22 Ultra 256GB Dual Sim - Phantom Black",
      category:"Cellphones",
      image:"/images/galaxy.png",
      price: 28000,
      brand:"Samsung",
      rating:5,
      numReviews:129,
      countInStock: 28,
      description: "The Samsung Galaxy S22 Ultra is a high-end smartphone with a 6.8-inch Dynamic AMOLED 2X display, a 108MP main camera, 12GB of RAM, and a 5,000mAh battery. It runs on a Snapdragon 888 processor and has a 5G capability. It also features a 120Hz refresh rate, IP68 water and dust resistance and reverse wireless charging. The device also supports an S Pen. It also comes with a 16MP front-facing camera and runs on One UI 3.5 based on Android 11."
    },
    {
      name:"Apple iphone 12 Promax",
      slug:"Apple iphone 12",
      category:"Cellphones",
      image:"/images/iphone.png",
      price: 37000,
      brand:"Apple",
      rating:3.5,
      numReviews:16,
      countInStock: 6,
      description:"The iPhone 13 Pro Max is a high-end smartphone from Apple. It features a 6.1-inch Super Retina XDR display, a triple-camera system with 12MP ultra-wide, wide, and telephoto lenses, and 5G capability. It runs on the A15 Bionic chip, has 6GB of RAM, and a built-in storage capacity of up to 1TB. The device also features Face ID, Ceramic Shield front cover, and a LiDAR scanner for improved augmented reality experiences. It also features MagSafe technology for wireless charging and accessories. It runs on iOS 15 and has IP68 rating for water and dust resistance."

   },
    {
      name:"Apple AirPods Pro ",
      slug:"Apple airpods Pro with MagSafe Charging Case",
      category:"Headphones",
      image:"/images/airpods.png",
      price: 4200,
      brand:"Apple",
      rating:3,
      numReviews:43,
      countInStock: 4,
      description:"The AirPods Pro are a pair of truly wireless earbuds designed and developed by Apple. They feature active noise cancellation, transparency mode, and a customizable fit with multiple ear tip options. They also have improved sound quality and a new design that is sweat and water resistant. They can be controlled using touch gestures and are compatible with Apple devices running iOS 13 or later, as well as Macs running macOS Catalina or later."

   },
   {
    name:"Sony Wireless Noise-Canceling ",
    slug:"Sony Wireless Noise-Canceling Headphones Headphones WH-1000XM4 Black",
    category:"Headphones",
    image:"/images/headset.png",
    price: 6700,
    brand:"Sony",
    rating:5,
    numReviews:12,
    countInStock: 20,
    description:"The Sony WH-1000XM4 is a pair of wireless noise-canceling headphones made by Sony. They feature advanced noise cancelling technology, long battery life, and touch controls. They also have the capability to personalize the sound to the users preferences and have Alexa, Google Assistant and siri enabled. They also have quick attention mode for easy conversation and automatic power off when not in use. They also come with a carrying case for protection and easy storage."

 },
 {
  name:"EcoFlow DELTA MAX",
  slug:"EcoFlow DELTA Max portable power station",
  category:"Smart Home",
  image:"/images/ecoflowmax.png",
  price: 30000,
  brand:"EcoFlow",
  rating:5,
  numReviews:3,
  countInStock: 16,
  description:"The EcoFlow Delta MAX is a portable power station that can be used to charge devices and power appliances. It features a high capacity battery and multiple ports for charging devices, as well as a built-in solar panel for recharging the battery. It is designed for outdoor use, such as camping and off-grid living, and can be used as a backup power source in case of emergencies. It is a powerful and efficient power station which is easy to carry around."

},
{
  name:"ESony Playstation 5 PS5 ",
  slug:"Sony Playstation 5 PS5 Bluray Disc Edition",
  category:"Gaming",
  image:"/images/ps5.png",
  price: 17000,
  brand:"Sony Playstation",
  rating:5,
  numReviews:34,
  countInStock: 2,
  description:"The Sony Playstation has a CPU based on AMD Zen 2 with 8 cores running at 3.5GHz, a GPU that delivers 10.28 TFLOPS, 36 CUs at 2.23GHz, 16GB of GDDR6 memory and an 825GB SSD storage. It also has Wi-Fi, Ethernet, Bluetooth 5.1, USB 3.2, HDMI 2.1 and Tempest 3D AudioTech. Its dimensions are 390mm x 104mm x 260mm and it weighs 4.5 kg. Additionally, it features a built-in solid-state drive (SSD) which provides faster loading times, and support for ray tracing which enhances the realism of lighting and shadows in games."

},
  ]

}

export default data;