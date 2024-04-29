import Pricing from "../pricing page/Pricing";
import PRODUCT_TABEL from '../../Assets/ICONS/CONTENT_PRODUCT.svg'
import PRODUCT_BTN from '../../Assets/ICONS/BT_REGISTER_PRODUCT.svg'


const Products = () => {
  return <>
        <Pricing img={PRODUCT_TABEL} btnSvg={PRODUCT_BTN}> Product Catalog</Pricing>

  </>;
};

export default Products;
