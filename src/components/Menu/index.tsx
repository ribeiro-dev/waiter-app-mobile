import { FlatList } from "react-native";

import { products } from "../../mocks/products";
import { Text } from "../Text";

import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";

export function Menu() {
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => {
        return (
          <Product>
            <ProductImage
              source={{ uri: `http://10.0.10.170:3001/uploads/${product.imagePath}` }}
            />

            <ProductDetails>
              <Text weight={600}>{product.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text weight={600} size={14}>{formatCurrency(product.price)}</Text>
            </ProductDetails>


            <AddToCartButton>
              <PlusCircle />
            </AddToCartButton>
          </Product>

      )}}
    />
  )
}
