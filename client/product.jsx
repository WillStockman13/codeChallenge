var Product = props => {
  return (
    <div className="product">
      <div>{props.data.name}</div>
      <img src={props.data.mainImage.ref} height='100px' width='100px' />
      <div> Price: {props.data.maxPrice}</div>
    </div>
  )   
  }

window.Product = Product;