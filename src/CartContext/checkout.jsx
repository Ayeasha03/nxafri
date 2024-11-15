function CheckoutPage({ cartItems }) {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert("Thank you for your purchase!"); // Placeholder for actual payment integration
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <div>
          <h2>Order Summary</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="checkout-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <h3>Total: ${totalAmount}</h3>
          <button onClick={handleCheckout}>Confirm Purchase</button>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;