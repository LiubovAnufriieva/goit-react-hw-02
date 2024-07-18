export const Product = ({
  name,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price,
}) => (
  <div>
    <h2>{name}</h2>
    <img src={imgUrl} alt={name} width="480" />
    <p>Price: {price} credits</p>
  </div>
);

