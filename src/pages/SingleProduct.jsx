import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const SingleProduct = () => {
    const { productId, id } = useParams;
    console.log(id);
  };
  return (
    <div>
      <p>Single Products</p>
    </div>
  );
};

export default SingleProduct;
