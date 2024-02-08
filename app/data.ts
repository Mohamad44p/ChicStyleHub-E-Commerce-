import { client } from "@/lib/sanity";

async function getData(slug: string) {
  const query = `*[_type == "product"] {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;
  
  const data = await client.fetch(query);
  return data;
}

export async function getDataCategory(cateogry: string) {
  const query = `*[_type == "product" && category->name == "${cateogry}" ] {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name
}`;
  const data = await client.fetch(query);
  return data;
}

export async function getAllData() {
  const query = `*[_type == "product"] {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url
  }`;
  const data = await client.fetch(query);
  return data;
}

export async function feachAllData() {
  const AllData = await getAllData();
  return AllData;
}

export async function feachDataCategory(cateogry: string) {
  const categoryData = await getDataCategory(cateogry);
  return categoryData;
}
export async function fetchProductData(slug: string) {
  const productData = await getData(slug);
  return productData;
}


export const linksAsData = [
  {
    name: "Home",
    link: "/", 
  },
  {
    name: "Men",
    link: "/Men",
  },
  {
    name: "Women",
    link: "/Women",
  },
  {
    name: "Teens",
    link: "/Teens",
  },
  {
    name: "Kids",
    link: "/Kids",
  },
  {
    name: "Electronics",
    link: "/Electronics",
  },
  {
    name: "Perfumes",
    link: "/Perfumes",
  },
  {
    name: "All",
    link: "/all",
  },
  {
    name: "Mobile",
    link: "/Mobile",
  },
  {
    name: "Laptop",
    link: "/Laptop",
  },
  {
    name: "TV",
    link: "/TV",
  },
  {
    name: "Headset",
    link: "/Headset",
  },
  {
    name: "MenPerfume",
    link: "/MenPerfume",
  },
  {
    name: "WomenPerfume",
    link: "/WomenPerfume",
  },
  {
    name: "ArabicPerfume",
    link: "/ArabicPerfume",
  },
  {
    name: "Login",
    link: "/log-in",
  },
]