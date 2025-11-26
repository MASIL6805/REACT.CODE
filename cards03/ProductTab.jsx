import Product from './Product.jsx';

function ProductTab() {
    let style = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        }

  return (
    <div style={(style)}>
        <h2></h2>
    <Product title="logitech mx master" idx={0}/>
    <Product title="apple pencil(2nd gen)"idx={1}/>
    <Product title="zebronics zeb-transformer"idx={2}/>
    <Product title="petronics"idx={3}/>  
    </div>
  );
}
export default ProductTab;
