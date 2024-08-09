import React, { useEffect } from 'react';

function Checkout() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=ARHYEX9K3rqjZz21_5CIzXUj0TuATcMnqAwqwhQr37NBGnnF2iuwImXfOAkhJsrhTXXWYS_aKNbgDMPu";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '100.00' // Aquí podrías calcular el total dinámicamente
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        }
      }).render('#paypal-button-container');
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
      <div id="paypal-button-container"></div>
    </div>
  );
}

export default Checkout;
