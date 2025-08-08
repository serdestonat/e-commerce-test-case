import ProductCard from "@/components/ProductCard";

const sampleProducts = [
  {
    id: 1,
    name: "Classic T-Shirt Unisex",
    price: 24.99,
    image: "/images/classic-tee.jpg",
    variants: [
      { id: 1, name: "X-Small", stock: 10 },
      { id: 2, name: "Small", stock: 5 },
      { id: 3, name: "Medium", stock: 0 },
      { id: 4, name: "Large", stock: 2 },
      { id: 5, name: "X-Large", stock: 7 },
      { id: 6, name: "XX-Large", stock: 4 },
    ],
  },
  {
    id: 2,
    name: "Premium Wool Sweater",
    price: 89.99,
    image: "/images/premium-sweater.jpg",
    variants: [
      { id: 7, name: "X-Small", stock: 0 },
      { id: 8, name: "Small", stock: 0 },
      { id: 9, name: "Medium", stock: 0 },
      { id: 10, name: "Large", stock: 0 },
      { id: 11, name: "X-Large", stock: 0 },
      { id: 12, name: "XX-Large", stock: 0 },
    ],
  },
  {
    id: 3,
    name: "Slim Fit Jeans For Men",
    price: 49.99,
    image: "/images/slim-jeans.jpg",
    variants: [
      { id: 13, name: "28", stock: 3 },
      { id: 14, name: "30", stock: 7 },
      { id: 15, name: "32", stock: 2 },
    ],
  },
  {
    id: 4,
    name: "Leather Sneakers For Men",
    price: 49.99,
    image: "/images/leather-sneakers.jpg",
    variants: [
      { id: 16, name: "40", stock: 3 },
      { id: 17, name: "41", stock: 7 },
      { id: 18, name: "42", stock: 2 },
      { id: 19, name: "43", stock: 4 },
      { id: 20, name: "44", stock: 0 },
      { id: 21, name: "45", stock: 1 },
      { id: 22, name: "46", stock: 0 },
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 flex justify-center">
        E-Commerce Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-around">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
