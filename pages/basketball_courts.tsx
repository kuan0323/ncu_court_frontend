const products = [
  {
    id: 1,
    name: "籃球場A",
    href: "#",
    photo: "",
    photoAlt: "籃球場A圖片",
    price: "$999",
    beReserved: "已被預約",
  },
  {
    id: 2,
    name: "籃球場B",
    href: "#",
    photo: "",
    photoAlt: "籃球場B圖片",
    price: "$999",
    beReserved: "已被預約",
  },
  {
    id: 3,
    name: "籃球場C",
    href: "#",
    photo: "",
    photoAlt: "籃球場C圖片",
    price: "$999",
    beReserved: "已被預約",
  },
  {
    id: 4,
    name: "籃球場D",
    href: "#",
    photo: "",
    photoAlt: "籃球場D圖片",
    price: "$999",
    beReserved: "已被預約",
  },
  {
    id: 5,
    name: "籃球場E",
    href: "#",
    photo: "",
    photoAlt: "籃球場E圖片",
    price: "$999",
    beReserved: "已被預約",
  },
  // More products...
];

export default function basketball_courts() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mb-5 text-2xl font-bold tracking-tight text-teal-500">
          籃球場列表
        </h2>
        <div className="bg-gray-500 h-0.5"></div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.photo}
                  alt={product.photoAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.beReserved}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
