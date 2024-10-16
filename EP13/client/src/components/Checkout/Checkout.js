import { useState } from 'react';
import axios from 'axios';
import { PayPalScriptProvider,PayPalButtons } from "@paypal/react-paypal-js";
import './Checkout.css';
import { useSelector } from 'react-redux';

const Checkout = () => {

    const grandTotal = useSelector((store) => store.cart.grandTotal);


    const handleApprove = async (data,actions) => {
        const order = await actions.order.capture();
        alert('Transaction completed by ' + order.payer.name.given_name);

        // Send the orderID to the backend for capturing
        try {
            const response = await axios.post('http://localhost:3000/capture-order',{ orderID: data.orderID });
            console.log('Transaction captured: ',response.data);
        } catch (error) {
            console.error('Error capturing order:',error);
        }
    };

    const [showModal,setShowModal] = useState(false);

    const handleCheckoutClick = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    return (
        <>
            <button className="checkout-button" onClick={handleCheckoutClick}>
                Checkout
            </button>
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-modal" onClick={closeModal}>X</button>
                        <h2>Select Payment Method</h2>
                        <PayPalScriptProvider options={{
                            "client-id": "AZEpM7mSfEsQsg5INFxEz5OZeuaOzIh0IEmLKO5ovP3lnDMCShVIzJQ8xMgxNHj5j8s-imtfazLVFo_A",
                        }}>
                            <PayPalButtons
                                style={{ layout: 'horizontal' }}
                                fundingSource="card" 
                                createOrder={(data,actions) => {
                                    return actions.order.create({
                                        purchase_units: [{
                                            amount: {
                                                value: grandTotal, 
                                            }
                                        }],
                                        application_context: {
                                            shipping_preference: "NO_SHIPPING" 
                                        }
                                    });
                                }}
                                onApprove={(data,actions) => {
                                    return actions.order.capture().then(details => {
                                        alert('Transaction completed by ' + details.payer.name.given_name);
                                        closeModal();
                                    });
                                }}
                            />
                        </PayPalScriptProvider>

                    </div>
                </div>
            )}
        </>
    );
};

export default Checkout;
