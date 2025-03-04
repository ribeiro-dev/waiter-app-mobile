import { useState } from "react";
import { FlatList } from "react-native";

import { Text } from "../Text";

import { ProductContainer, ProductImage, ProductDetails, Separator, AddToCartButton } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { Product } from "../../types/Products";

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {
  const [isModalVisible, setisModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setisModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setisModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => {
          return (
            <ProductContainer onPress={() => handleOpenModal(product)}>
              <ProductImage
                source={{
                  uri: `http://10.0.10.170:3001/uploads/${product.imagePath}`,
                }}
              />

              <ProductDetails>
                <Text weight={600}>{product.name}</Text>
                <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                  {product.description}
                </Text>
                <Text weight={600} size={14}>
                  {formatCurrency(product.price)}
                </Text>
              </ProductDetails>

              <AddToCartButton onPress={() => onAddToCart(product)}>
                <PlusCircle />
              </AddToCartButton>
            </ProductContainer>
          );
        }}
      />
    </>
  );
}
