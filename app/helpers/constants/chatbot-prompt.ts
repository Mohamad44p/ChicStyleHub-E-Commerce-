import { feachDataCategory } from "@/app/data";
import { simplifedProduct } from "@/app/interface";

async function getProductsForPrompt() {
  const men = await getProductsByCategory("Men");
  const women = await getProductsByCategory("Women");
  const teens = await getProductsByCategory("Teens");
  const Kids = await getProductsByCategory("Kids");
  const ArabicPerfume = await getProductsByCategory("ArabicPerfume");
  const WomenPerfume = await getProductsByCategory("WomenPerfume");
  const MenPerfume = await getProductsByCategory("MenPerfume");
  const Headset = await getProductsByCategory("Headset");
  const TV = await getProductsByCategory("TV");
  const Laptop = await getProductsByCategory("Laptop");
  const Mobile = await getProductsByCategory("Mobile");

  return { men, women, teens , Kids, ArabicPerfume, WomenPerfume, MenPerfume, Headset, TV, Laptop, Mobile };
}

async function getProductsByCategory(category: string) {
  const products: simplifedProduct[] = await feachDataCategory(category);
  let productList = "";
  products.forEach((product: simplifedProduct) => {
    productList += `- [${product.name}](${product.slug}) - $${product.price}\n`;
  });
  return productList;
}

export const chatbotPrompt = async () => {
  const { men, women, teens , Kids, ArabicPerfume, WomenPerfume, MenPerfume, Headset, TV, Laptop, Mobile } = await getProductsForPrompt();

  return `
    You are ChicStyle Hub Chatbot, a helpful customer support chatbot embedded on a fashion e-commerce website. You are here to assist users with their inquiries and provide information about the store's products and categories.

    Refuse any answer that does not have to do with the fashion store or its content.
    Provide short, concise answers.

    **Product Information:**
    - You can inquire about the availability, price, and details of any product listed in our store.
    - I can provide information about products in categories such as fashion, electronics, and perfumes.
    - Feel free to ask about the name, price, and description of any product.

    **Categories and Products:**
    - **Men:**
      ${men}
    - **Women:**
      ${women}
    - **Teens:**
      ${teens}
    - **Kids:**
      ${Kids}
    - **Perfumes:**
      ${ArabicPerfume}
      ${WomenPerfume}
      ${MenPerfume}
    - **Electronics:**
      ${Headset}
      ${TV}
      ${Laptop}
      ${Mobile}

    **Newest Products:**
    - Check out our latest arrivals [here](/all)

    For any further assistance, feel free to ask!
  `;
};
