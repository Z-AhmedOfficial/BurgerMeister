import React, { useState } from 'react';
import "../styles/Sections.css";
import { Link } from 'react-router-dom';

export default function Order() {
    const mockData = [
        { title: "Crispy Chicken", price: 5.15},
        { title: "Ultimate Bacon",   price: 7.32},
        { title: "Black Sheep" , price: 6.15},
        { title: "Vegan Burger", price: 5.25 },
        { title: "Double Burger" , price: 8.25 },
        { title: "Turkey Burger",  price: 6.18 },
        { title: "Smokey House" , price: 7.19},
        { title: "Classic Burger" ,    price: 5.12}

    ];

    const [selectedBurgers, setSelectedBurgers] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [userName, setUserName] = useState('');
    const [userAddress, setUserAddress] = useState('');
    const [submitted, setSubmitted] = useState(null);
    const [err, setErr] = useState({});
    const [showModal, setShowModal] = useState(false);

    const validateForm = () => {
        let isValid = true;
        let newErr = {};

        if (selectedBurgers.length === 0) {
            newErr.selectedBurgers = "Select at least one burger";
            isValid = false;
        }
        if (!quantity || quantity < 1) {
            newErr.quantity = "Select a valid quantity";
            isValid = false;
        }
        if (!userName.trim()) {
            newErr.userName = "Name is required";
            isValid = false;
        }
        if (!userAddress.trim()) {
            newErr.userAddress = "Address is required";
            isValid = false;
        }
        setErr(newErr);
        return isValid;
    };

    const calculateTotalPrice = () => {
        const selectedItems = mockData.filter(burger => selectedBurgers.includes(burger.title));
        const totalPrice = selectedItems.reduce((acc, burger) => acc + burger.price, 0);
        return totalPrice * quantity;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            const formData = {
                Burgers: selectedBurgers,
                price: calculateTotalPrice(),
                Quantity: quantity,
                Name: userName,
                Address: userAddress
            };
            setSubmitted(formData);
            setShowModal(true); 

            // Reset all states after form submission
            setQuantity(1);
            setUserName('');
            setUserAddress('');
            setSelectedBurgers([]);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleBurgerChange = (e) => {
        const value = e.target.value;
        
        setSelectedBurgers((prevBurgers) => {
            // Check if the burger is already selected
            if (prevBurgers.includes(value)) {
                // Remove the burger from the list if it is already selected
                return prevBurgers.filter(burger => burger !== value);
            } else {
                // Add the burger to the list if it is not already selected
                return [...prevBurgers, value];
            }
        });
    };
    

    return (
        <>
        <div className="order-page">
            <h1>Order Your Burger</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Choose Your Burgers:</label>
                    <select
                        multiple
                        value={selectedBurgers}
                        onChange={handleBurgerChange}
                        required
                    >
                        {mockData.map((burger, index) => (
                            <option key={index} value={burger.title}>
                                {burger.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Quantity:</label>
                    <input
                        type="number"
                        min="1"
                        value={quantity}
                        onChange={e => setQuantity(parseInt(e.target.value, 10) || 1)}
                        required
                    />
                    {err.quantity && <div className="error">{err.quantity}</div>}
                </div>

                <div className="form-group">
                    <label>Your Name:</label>
                    <input
                        type="text"
                        value={userName}
                        pattern="[A-Za-z\s]+"
                        onChange={e => setUserName(e.target.value)}
                        required
                    />
                    {err.userName && <div className="error">{err.userName}</div>}
                </div>

                <div className="form-group">
                    <label>Delivery Address:</label>
                    <textarea
                        value={userAddress}
                        onChange={e => setUserAddress(e.target.value)}
                        required
                    />
                    {err.userAddress && <div className="error">{err.userAddress}</div>}
                </div>

                <button type="submit" className="btn-submit">Place Order</button>
            </form>

            {showModal && (
                <div className="modaly">
                    <div className="modaly-content">
                        <span className="closing" onClick={closeModal}>&times;</span>
                        <h2>Burgers: <p>{submitted.Burgers.join(', ')}</p></h2>
                        <h2>Price: <p>{submitted.price.toFixed(2)}</p></h2>
                        <h2>Quantity: <p>{submitted.Quantity}</p></h2>
                        <h2>Name:<p> {submitted.Name}</p></h2>
                        <h2>Address: <p> {submitted.Address}</p></h2>
                    </div>
                </div>
            )}
            
        </div>
        <div className='btn_div'>
        <Link to="/" className="logo">
           <button className='homies'>Home</button>
       </Link> 
           </div>
           </>
    );
}
