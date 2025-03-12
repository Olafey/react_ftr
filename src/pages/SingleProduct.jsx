import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId, id } = useParams;
  console.log(id);

  return (
    <div>
      <h1>Single Products</h1>
    </div>
  );
};

export default SingleProduct;
