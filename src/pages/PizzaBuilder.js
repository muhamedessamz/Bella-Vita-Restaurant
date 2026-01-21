import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { FaArrowLeft, FaPlus, FaMinus, FaShoppingCart, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const PizzaBuilder = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  
  // Pizza configuration state
  const [pizza, setPizza] = useState({
    size: 'medium',
    crust: 'classic',
    sauce: 'tomato',
    cheese: 'mozzarella',
    toppings: []
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 'size', title: 'Choose Size', icon: '📏' },
    { id: 'crust', title: 'Select Crust', icon: '🍞' },
    { id: 'sauce', title: 'Pick Sauce', icon: '🍅' },
    { id: 'cheese', title: 'Add Cheese', icon: '🧀' },
    { id: 'meat-toppings', title: 'Meat Toppings', icon: '🥓' },
    { id: 'veggie-toppings', title: 'Vegetables', icon: '🥬' },
    { id: 'premium-toppings', title: 'Premium Items', icon: '⭐' }
  ];

  // Pizza options
  const sizes = [
    { id: 'small', name: 'Small (10")', price: 12.99 },
    { id: 'medium', name: 'Medium (12")', price: 16.99 },
    { id: 'large', name: 'Large (14")', price: 20.99 },
    { id: 'xlarge', name: 'X-Large (16")', price: 24.99 }
  ];

  const crusts = [
    { id: 'classic', name: 'Classic Hand-Tossed', price: 0 },
    { id: 'thin', name: 'Thin & Crispy', price: 0 },
    { id: 'thick', name: 'Thick Crust', price: 1.50 },
    { id: 'stuffed', name: 'Cheese Stuffed', price: 3.00 },
    { id: 'gluten-free', name: 'Gluten-Free', price: 2.50 }
  ];

  const sauces = [
    { id: 'tomato', name: 'Classic Tomato', price: 0 },
    { id: 'white', name: 'White Sauce', price: 0.50 },
    { id: 'bbq', name: 'BBQ Sauce', price: 0.50 },
    { id: 'pesto', name: 'Pesto', price: 1.00 },
    { id: 'spicy', name: 'Spicy Arrabbiata', price: 0.50 }
  ];

  const cheeses = [
    { id: 'mozzarella', name: 'Mozzarella', price: 0 },
    { id: 'extra-mozzarella', name: 'Extra Mozzarella', price: 2.00 },
    { id: 'parmesan', name: 'Parmesan', price: 1.50 },
    { id: 'four-cheese', name: 'Four Cheese Blend', price: 3.00 },
    { id: 'vegan', name: 'Vegan Cheese', price: 2.50 }
  ];

  const toppings = [
    // Meats
    { id: 'pepperoni', name: 'Pepperoni', price: 2.50, category: 'meat' },
    { id: 'sausage', name: 'Italian Sausage', price: 2.50, category: 'meat' },
    { id: 'ham', name: 'Ham', price: 2.00, category: 'meat' },
    { id: 'bacon', name: 'Bacon', price: 3.00, category: 'meat' },
    { id: 'chicken', name: 'Grilled Chicken', price: 3.50, category: 'meat' },
    
    // Vegetables
    { id: 'mushrooms', name: 'Mushrooms', price: 1.50, category: 'vegetable' },
    { id: 'peppers', name: 'Bell Peppers', price: 1.50, category: 'vegetable' },
    { id: 'onions', name: 'Red Onions', price: 1.00, category: 'vegetable' },
    { id: 'olives', name: 'Black Olives', price: 1.50, category: 'vegetable' },
    { id: 'tomatoes', name: 'Fresh Tomatoes', price: 1.50, category: 'vegetable' },
    { id: 'spinach', name: 'Fresh Spinach', price: 2.00, category: 'vegetable' },
    { id: 'basil', name: 'Fresh Basil', price: 1.50, category: 'vegetable' },
    
    // Premium
    { id: 'prosciutto', name: 'Prosciutto', price: 4.00, category: 'premium' },
    { id: 'truffle', name: 'Truffle Oil', price: 5.00, category: 'premium' },
    { id: 'arugula', name: 'Arugula', price: 2.50, category: 'premium' }
  ];

  // Calculate total price
  useEffect(() => {
    let price = 0;
    
    // Base price from size
    const selectedSize = sizes.find(s => s.id === pizza.size);
    price += selectedSize?.price || 0;
    
    // Crust price
    const selectedCrust = crusts.find(c => c.id === pizza.crust);
    price += selectedCrust?.price || 0;
    
    // Sauce price
    const selectedSauce = sauces.find(s => s.id === pizza.sauce);
    price += selectedSauce?.price || 0;
    
    // Cheese price
    const selectedCheese = cheeses.find(c => c.id === pizza.cheese);
    price += selectedCheese?.price || 0;
    
    // Toppings price
    pizza.toppings.forEach(toppingId => {
      const topping = toppings.find(t => t.id === toppingId);
      price += topping?.price || 0;
    });
    
    setTotalPrice(price);
  }, [pizza, sizes, crusts, sauces, cheeses, toppings]);

  const updatePizza = (category, value) => {
    setPizza(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const toggleTopping = (toppingId) => {
    setPizza(prev => ({
      ...prev,
      toppings: prev.toppings.includes(toppingId)
        ? prev.toppings.filter(id => id !== toppingId)
        : [...prev.toppings, toppingId]
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Helper functions for pizza appearance
  const getCrustColor = () => {
    switch (pizza.crust) {
      case 'thin': return '#E6D3A3';
      case 'thick': return '#D2B48C';
      case 'stuffed': return '#F4E4BC';
      case 'gluten-free': return '#E0D0B0';
      default: return '#DEB887';
    }
  };

  const getDarkerCrustColor = () => {
    switch (pizza.crust) {
      case 'thin': return '#D4A574';
      case 'thick': return '#C8956D';
      case 'stuffed': return '#E6D3A3';
      case 'gluten-free': return '#D0C0A0';
      default: return '#D2B48C';
    }
  };

  const getSauceColor = () => {
    switch (pizza.sauce) {
      case 'tomato': return '#DC143C';
      case 'white': return '#F5F5DC';
      case 'bbq': return '#8B4513';
      case 'pesto': return '#228B22';
      case 'spicy': return '#FF4500';
      default: return '#DC143C';
    }
  };

  const getCheeseColor = () => {
    switch (pizza.cheese) {
      case 'mozzarella': return '#FFFACD';
      case 'extra-mozzarella': return '#FFF8DC';
      case 'parmesan': return '#F0E68C';
      case 'four-cheese': return '#FFEBCD';
      case 'vegan': return '#F5DEB3';
      default: return '#FFFACD';
    }
  };

  const getToppingColor = (toppingId) => {
    const topping = toppings.find(t => t.id === toppingId);
    if (!topping) return '#8B0000';

    switch (topping.category) {
      case 'meat':
        if (toppingId === 'pepperoni') return '#8B0000';
        if (toppingId === 'sausage') return '#A0522D';
        if (toppingId === 'ham') return '#CD853F';
        if (toppingId === 'bacon') return '#8B4513';
        if (toppingId === 'chicken') return '#F5DEB3';
        return '#8B0000';
      case 'vegetable':
        if (toppingId === 'mushrooms') return '#8B7355';
        if (toppingId === 'peppers') return '#228B22';
        if (toppingId === 'onions') return '#9370DB';
        if (toppingId === 'olives') return '#2F4F4F';
        if (toppingId === 'tomatoes') return '#FF6347';
        if (toppingId === 'spinach') return '#006400';
        if (toppingId === 'basil') return '#32CD32';
        return '#228B22';
      case 'premium':
        if (toppingId === 'prosciutto') return '#CD853F';
        if (toppingId === 'truffle') return '#8B4513';
        if (toppingId === 'arugula') return '#9ACD32';
        return '#DAA520';
      default:
        return '#8B0000';
    }
  };

  const addPizzaToCart = () => {
    const pizzaName = `Custom ${pizza.size.charAt(0).toUpperCase() + pizza.size.slice(1)} Pizza`;
    const pizzaDescription = `${crusts.find(c => c.id === pizza.crust)?.name} crust with ${sauces.find(s => s.id === pizza.sauce)?.name.toLowerCase()}, ${cheeses.find(c => c.id === pizza.cheese)?.name.toLowerCase()}${pizza.toppings.length > 0 ? `, and ${pizza.toppings.map(id => toppings.find(t => t.id === id)?.name).join(', ')}` : ''}`;

    addToCart({
      id: `custom-pizza-${Date.now()}`,
      name: pizzaName,
      price: totalPrice,
      description: pizzaDescription,
      image: '/images/Build-Your-Perfect-Pizza.jpg',
      category: 'pizza'
    });

    // Pizza added successfully - redirect to menu
    navigate('/menu');
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <div className="bg-white shadow-sm sticky-top">
        <div className="container py-3">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Link to="/" className="btn btn-outline-secondary me-3">
                <FaArrowLeft className="me-2" />
                Back
              </Link>
              <h1 className="h3 mb-0 fw-bold">Build Your Perfect Pizza</h1>
            </div>
            <div className="text-end">
              <div className="h4 mb-0 text-success fw-bold">${totalPrice.toFixed(2)}</div>
              <small className="text-muted">Total Price</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="row">
          {/* Pizza Preview */}
          <div className="col-lg-5 mb-4">
            <div className="sticky-top" style={{ top: '100px' }}>
              <div className="card border-0 shadow-lg">
                <div className="card-body p-4">
                  <h5 className="card-title mb-4">Your Pizza Preview</h5>
                  <div className="position-relative">
                    {/* Pizza Base with realistic crust */}
                    <div
                      className="rounded-circle mx-auto shadow-lg position-relative"
                      style={{
                        width: '320px',
                        height: '320px',
                        background: `
                          radial-gradient(circle at 35% 35%,
                            ${getCrustColor()} 0%,
                            ${getCrustColor()} 55%,
                            ${getDarkerCrustColor()} 75%,
                            #8B4513 90%,
                            #654321 100%
                          )
                        `,
                        border: `${pizza.crust === 'thick' ? '16px' : pizza.crust === 'stuffed' ? '20px' : '12px'} solid #654321`,
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: `
                          inset 0 0 30px rgba(0,0,0,0.15),
                          inset 0 0 60px rgba(139, 69, 19, 0.1),
                          0 12px 30px rgba(0,0,0,0.25),
                          0 0 0 2px rgba(139, 69, 19, 0.3)
                        `
                      }}
                    >
                      {/* Crust texture - air bubbles and char marks */}
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={`bubble-${i}`}
                          className="position-absolute rounded-circle"
                          style={{
                            width: `${4 + i % 3 * 3}px`,
                            height: `${4 + i % 3 * 3}px`,
                            background: `rgba(${pizza.crust === 'thin' ? '160, 120, 80' : '139, 69, 19'}, ${0.3 + i % 3 * 0.1})`,
                            top: `${10 + (i * 28) % 280}px`,
                            left: `${10 + ((i * 37) % 280)}px`,
                            transform: 'translate(-50%, -50%)',
                            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)'
                          }}
                        />
                      ))}

                      {/* Char marks for authentic look */}
                      {pizza.crust !== 'gluten-free' && [...Array(6)].map((_, i) => (
                        <div
                          key={`char-${i}`}
                          className="position-absolute"
                          style={{
                            width: `${8 + i % 2 * 4}px`,
                            height: '2px',
                            background: 'rgba(101, 67, 33, 0.6)',
                            top: `${20 + (i * 45) % 260}px`,
                            left: `${20 + ((i * 43) % 260)}px`,
                            transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                            borderRadius: '50%'
                          }}
                        />
                      ))}
                      {/* Sauce Layer with realistic spread */}
                      <div
                        className="position-absolute rounded-circle"
                        style={{
                          width: '280px',
                          height: '280px',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          background: `
                            radial-gradient(circle at 45% 35%,
                              ${getSauceColor()} 0%,
                              ${getSauceColor()}ee 40%,
                              ${getSauceColor()}cc 70%,
                              ${getSauceColor()}aa 85%,
                              transparent 100%
                            )
                          `,
                          opacity: 0.9,
                          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
                          borderRadius: '50%',
                          filter: 'blur(0.5px)'
                        }}
                      />

                      {/* Sauce texture spots */}
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={`sauce-${i}`}
                          className="position-absolute rounded-circle"
                          style={{
                            width: `${8 + i * 2}px`,
                            height: `${8 + i * 2}px`,
                            background: `${getSauceColor()}66`,
                            top: `${40 + Math.sin(i * 1.2) * 30}%`,
                            left: `${40 + Math.cos(i * 1.2) * 30}%`,
                            transform: 'translate(-50%, -50%)',
                            filter: 'blur(1px)'
                          }}
                        />
                      ))}

                      {/* Cheese Layer with melted effect */}
                      <div
                        className="position-absolute rounded-circle"
                        style={{
                          width: '260px',
                          height: '260px',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          background: `
                            radial-gradient(circle at 40% 30%,
                              ${getCheeseColor()} 0%,
                              ${getCheeseColor()}ee 30%,
                              ${getCheeseColor()}dd 60%,
                              ${getCheeseColor()}bb 80%,
                              ${getCheeseColor()}99 95%,
                              transparent 100%
                            )
                          `,
                          opacity: 0.95,
                          boxShadow: `
                            inset 0 0 25px rgba(255,255,255,0.3),
                            inset 0 0 40px rgba(255,255,255,0.1)
                          `,
                          filter: 'blur(0.3px)'
                        }}
                      />

                      {/* Cheese bubbles/melted spots */}
                      {pizza.cheese === 'extra-mozzarella' && [...Array(8)].map((_, i) => (
                        <div
                          key={`cheese-${i}`}
                          className="position-absolute rounded-circle"
                          style={{
                            width: `${6 + i % 3 * 4}px`,
                            height: `${6 + i % 3 * 4}px`,
                            background: `${getCheeseColor()}aa`,
                            top: `${35 + Math.sin(i * 0.8) * 25}%`,
                            left: `${35 + Math.cos(i * 0.8) * 25}%`,
                            transform: 'translate(-50%, -50%)',
                            boxShadow: `0 0 ${4 + i % 2 * 2}px rgba(255,255,255,0.6)`,
                            filter: 'blur(0.5px)'
                          }}
                        />
                      ))}
                      
                      {/* Toppings with realistic placement */}
                      {pizza.toppings.map((toppingId, index) => {
                        const topping = toppings.find(t => t.id === toppingId);
                        const angle = (index * 51.4 + 25) % 360; // More natural distribution
                        const radius = 45 + (index % 5) * 12; // Varied radius
                        const x = Math.cos(angle * Math.PI / 180) * radius;
                        const y = Math.sin(angle * Math.PI / 180) * radius;

                        // Different sizes and shapes based on topping type
                        const getToppingStyle = () => {
                          switch (toppingId) {
                            case 'pepperoni':
                              return { width: '22px', height: '22px', borderRadius: '50%' };
                            case 'sausage':
                              return { width: '16px', height: '24px', borderRadius: '40%' };
                            case 'mushrooms':
                              return { width: '18px', height: '14px', borderRadius: '60% 40%' };
                            case 'peppers':
                              return { width: '20px', height: '8px', borderRadius: '50% 20%' };
                            case 'olives':
                              return { width: '12px', height: '16px', borderRadius: '50%' };
                            case 'onions':
                              return { width: '16px', height: '16px', borderRadius: '20%' };
                            case 'bacon':
                              return { width: '24px', height: '6px', borderRadius: '30%' };
                            case 'basil':
                              return { width: '14px', height: '18px', borderRadius: '30% 70%' };
                            default:
                              return {
                                width: topping?.category === 'meat' ? '20px' : '16px',
                                height: topping?.category === 'meat' ? '20px' : '16px',
                                borderRadius: '50%'
                              };
                          }
                        };

                        const style = getToppingStyle();

                        return (
                          <div
                            key={`${toppingId}-${index}`}
                            className="position-absolute"
                            style={{
                              ...style,
                              left: `calc(50% + ${x}px)`,
                              top: `calc(50% + ${y}px)`,
                              transform: `translate(-50%, -50%) rotate(${angle + index * 15}deg)`,
                              background: `
                                radial-gradient(circle at 30% 30%,
                                  ${getToppingColor(toppingId)},
                                  ${getToppingColor(toppingId)}dd 60%,
                                  ${getToppingColor(toppingId)}aa 100%
                                )
                              `,
                              border: `1px solid ${getToppingColor(toppingId)}66`,
                              boxShadow: `
                                0 2px 4px rgba(0,0,0,0.3),
                                inset 0 1px 2px rgba(255,255,255,0.2)
                              `,
                              zIndex: 15 + index,
                              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))'
                            }}
                            title={topping?.name}
                          />
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Pizza Summary */}
                  <div className="mt-4">
                    <h6 className="fw-bold mb-3">Your Selection:</h6>
                    <ul className="list-unstyled small">
                      <li><strong>Size:</strong> {sizes.find(s => s.id === pizza.size)?.name}</li>
                      <li><strong>Crust:</strong> {crusts.find(c => c.id === pizza.crust)?.name}</li>
                      <li><strong>Sauce:</strong> {sauces.find(s => s.id === pizza.sauce)?.name}</li>
                      <li><strong>Cheese:</strong> {cheeses.find(c => c.id === pizza.cheese)?.name}</li>
                      {pizza.toppings.length > 0 && (
                        <li><strong>Toppings:</strong> {pizza.toppings.map(id => toppings.find(t => t.id === id)?.name).join(', ')}</li>
                      )}
                    </ul>
                  </div>
                  
                  <button
                    className="btn btn-primary btn-lg w-100 mt-4 d-flex align-items-center justify-content-center"
                    onClick={addPizzaToCart}
                    style={{
                      borderRadius: '15px',
                      padding: '12px 20px',
                      fontWeight: '600',
                      fontSize: '16px'
                    }}
                  >
                    <FaShoppingCart className="me-2" />
                    <span>Add to Cart - ${totalPrice.toFixed(2)}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pizza Builder Options */}
          <div className="col-lg-7">
            {/* Step Progress */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0">
                    {steps[currentStep].icon} {steps[currentStep].title}
                  </h4>
                  <div className="d-flex align-items-center gap-2">
                    <span className="badge bg-primary">{currentStep + 1} of {steps.length}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="progress mb-4" style={{ height: '8px' }}>
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  ></div>
                </div>

                {/* Step Indicators */}
                <div className="d-flex justify-content-between mb-4">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`text-center ${index <= currentStep ? 'text-primary' : 'text-muted'}`}
                      style={{ flex: 1 }}
                    >
                      <div
                        className={`rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center ${
                          index <= currentStep ? 'bg-primary text-white' : 'bg-light text-muted'
                        }`}
                        style={{ width: '40px', height: '40px', fontSize: '18px' }}
                      >
                        {step.icon}
                      </div>
                      <small className="fw-semibold">{step.title}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Current Step Content */}
            {currentStep === 0 && (
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Choose Your Size</h5>
                <div className="row g-3">
                  {sizes.map(size => (
                    <div key={size.id} className="col-md-6">
                      <div
                        className={`card h-100 cursor-pointer transition-all ${
                          pizza.size === size.id
                            ? 'border-primary shadow-lg'
                            : 'border-light hover-shadow'
                        }`}
                        onClick={() => updatePizza('size', size.id)}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: pizza.size === size.id ? '#e3f2fd' : 'white',
                          transform: pizza.size === size.id ? 'translateY(-2px)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="card-body text-center">
                          <h6 className={`card-title ${pizza.size === size.id ? 'text-primary fw-bold' : ''}`}>
                            {size.name}
                          </h6>
                          <p className="card-text text-success fw-bold">${size.price}</p>
                          {pizza.size === size.id && (
                            <div className="position-absolute top-0 end-0 p-2">
                              <FaCheckCircle className="text-primary" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}

            {currentStep === 1 && (
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Choose Your Crust</h5>
                <div className="row g-3">
                  {crusts.map(crust => (
                    <div key={crust.id} className="col-md-6">
                      <div
                        className={`card h-100 cursor-pointer transition-all ${
                          pizza.crust === crust.id
                            ? 'border-primary shadow-lg'
                            : 'border-light hover-shadow'
                        }`}
                        onClick={() => updatePizza('crust', crust.id)}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: pizza.crust === crust.id ? '#e3f2fd' : 'white',
                          transform: pizza.crust === crust.id ? 'translateY(-2px)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="card-body text-center">
                          <h6 className={`card-title ${pizza.crust === crust.id ? 'text-primary fw-bold' : ''}`}>
                            {crust.name}
                          </h6>
                          <p className="card-text text-success fw-bold">
                            {crust.price > 0 ? `+$${crust.price}` : 'Included'}
                          </p>
                          {pizza.crust === crust.id && (
                            <div className="position-absolute top-0 end-0 p-2">
                              <FaCheckCircle className="text-primary" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}

            {currentStep === 2 && (
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Choose Your Sauce</h5>
                <div className="row g-3">
                  {sauces.map(sauce => (
                    <div key={sauce.id} className="col-md-6">
                      <div
                        className={`card h-100 cursor-pointer transition-all ${
                          pizza.sauce === sauce.id
                            ? 'border-primary shadow-lg'
                            : 'border-light hover-shadow'
                        }`}
                        onClick={() => updatePizza('sauce', sauce.id)}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: pizza.sauce === sauce.id ? '#e3f2fd' : 'white',
                          transform: pizza.sauce === sauce.id ? 'translateY(-2px)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="card-body text-center">
                          <h6 className={`card-title ${pizza.sauce === sauce.id ? 'text-primary fw-bold' : ''}`}>
                            {sauce.name}
                          </h6>
                          <p className="card-text text-success fw-bold">
                            {sauce.price > 0 ? `+$${sauce.price}` : 'Included'}
                          </p>
                          {pizza.sauce === sauce.id && (
                            <div className="position-absolute top-0 end-0 p-2">
                              <FaCheckCircle className="text-primary" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}

            {currentStep === 3 && (
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Choose Your Cheese</h5>
                <div className="row g-3">
                  {cheeses.map(cheese => (
                    <div key={cheese.id} className="col-md-6">
                      <div
                        className={`card h-100 cursor-pointer transition-all ${
                          pizza.cheese === cheese.id
                            ? 'border-primary shadow-lg'
                            : 'border-light hover-shadow'
                        }`}
                        onClick={() => updatePizza('cheese', cheese.id)}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: pizza.cheese === cheese.id ? '#e3f2fd' : 'white',
                          transform: pizza.cheese === cheese.id ? 'translateY(-2px)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="card-body text-center">
                          <h6 className={`card-title ${pizza.cheese === cheese.id ? 'text-primary fw-bold' : ''}`}>
                            {cheese.name}
                          </h6>
                          <p className="card-text text-success fw-bold">
                            {cheese.price > 0 ? `+$${cheese.price}` : 'Included'}
                          </p>
                          {pizza.cheese === cheese.id && (
                            <div className="position-absolute top-0 end-0 p-2">
                              <FaCheckCircle className="text-primary" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}

            {currentStep === 4 && (
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">🥓 Choose Meat Toppings</h5>
                  <p className="text-muted mb-4">Add delicious meat toppings to your pizza (optional)</p>
                <div className="row g-3">
                  {toppings.filter(t => t.category === 'meat').map(topping => (
                    <div key={topping.id} className="col-md-6">
                      <div
                        className={`card h-100 cursor-pointer transition-all ${
                          pizza.toppings.includes(topping.id)
                            ? 'border-success shadow-lg'
                            : 'border-light hover-shadow'
                        }`}
                        onClick={() => toggleTopping(topping.id)}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: pizza.toppings.includes(topping.id) ? '#e8f5e8' : 'white',
                          transform: pizza.toppings.includes(topping.id) ? 'translateY(-2px)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="card-body text-center">
                          <h6 className={`card-title mb-2 ${pizza.toppings.includes(topping.id) ? 'text-success fw-bold' : ''}`}>
                            {topping.name}
                          </h6>
                          <div className="mb-2">
                            <small className="text-success fw-bold">+${topping.price}</small>
                          </div>
                          <div className={`fs-5 ${pizza.toppings.includes(topping.id) ? 'text-success' : 'text-muted'}`}>
                            {pizza.toppings.includes(topping.id) ? <FaMinus /> : <FaPlus />}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}

            {currentStep === 5 && (
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">🥬 Choose Vegetable Toppings</h5>
                  <p className="text-muted mb-4">Add fresh vegetables to your pizza (optional)</p>

                <div className="row g-3">
                  {toppings.filter(t => t.category === 'vegetable').map(topping => (
                    <div key={topping.id} className="col-md-6">
                      <div
                        className={`card h-100 cursor-pointer transition-all ${
                          pizza.toppings.includes(topping.id)
                            ? 'border-success shadow-lg'
                            : 'border-light hover-shadow'
                        }`}
                        onClick={() => toggleTopping(topping.id)}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: pizza.toppings.includes(topping.id) ? '#e8f5e8' : 'white',
                          transform: pizza.toppings.includes(topping.id) ? 'translateY(-2px)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="card-body text-center">
                          <h6 className={`card-title mb-2 ${pizza.toppings.includes(topping.id) ? 'text-success fw-bold' : ''}`}>
                            {topping.name}
                          </h6>
                          <div className="mb-2">
                            <small className="text-success fw-bold">+${topping.price}</small>
                          </div>
                          <div className={`fs-5 ${pizza.toppings.includes(topping.id) ? 'text-success' : 'text-muted'}`}>
                            {pizza.toppings.includes(topping.id) ? <FaMinus /> : <FaPlus />}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}

            {currentStep === 6 && (
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">⭐ Choose Premium Toppings</h5>
                  <p className="text-muted mb-4">Add gourmet ingredients for an elevated experience (optional)</p>

                <div className="row g-3">
                  {toppings.filter(t => t.category === 'premium').map(topping => (
                    <div key={topping.id} className="col-md-6">
                      <div
                        className={`card h-100 cursor-pointer transition-all ${
                          pizza.toppings.includes(topping.id)
                            ? 'border-warning shadow-lg'
                            : 'border-light hover-shadow'
                        }`}
                        onClick={() => toggleTopping(topping.id)}
                        style={{
                          cursor: 'pointer',
                          backgroundColor: pizza.toppings.includes(topping.id) ? '#fff8e1' : 'white',
                          transform: pizza.toppings.includes(topping.id) ? 'translateY(-2px)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="card-body text-center">
                          <h6 className={`card-title mb-2 ${pizza.toppings.includes(topping.id) ? 'text-warning fw-bold' : ''}`}>
                            {topping.name}
                          </h6>
                          <div className="mb-2">
                            <small className="text-success fw-bold">+${topping.price}</small>
                          </div>
                          <div className={`fs-5 ${pizza.toppings.includes(topping.id) ? 'text-warning' : 'text-muted'}`}>
                            {pizza.toppings.includes(topping.id) ? <FaMinus /> : <FaPlus />}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            )}

            {/* Navigation Buttons */}
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                {/* Mobile Layout */}
                <div className="d-block d-md-none">
                  <div className="text-center mb-3">
                    <div className="h5 mb-0 text-success fw-bold">${totalPrice.toFixed(2)}</div>
                    <small className="text-muted">Total Price</small>
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-outline-secondary flex-fill"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      style={{
                        opacity: currentStep === 0 ? 0.5 : 1,
                        cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <FaArrowLeft className="me-1" />
                      <span className="d-none d-sm-inline">Previous</span>
                      <span className="d-inline d-sm-none">Prev</span>
                    </button>

                    {currentStep < steps.length - 1 ? (
                      <button
                        className="btn btn-primary flex-fill"
                        onClick={nextStep}
                      >
                        <span className="d-none d-sm-inline">Next</span>
                        <span className="d-inline d-sm-none">Next</span>
                        <FaArrowRight className="ms-1" />
                      </button>
                    ) : (
                      <button
                        className="btn btn-success flex-fill"
                        onClick={addPizzaToCart}
                      >
                        <FaShoppingCart className="me-1" />
                        <span className="d-none d-sm-inline">Add to Cart</span>
                        <span className="d-inline d-sm-none">Add</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className="d-none d-md-flex justify-content-between align-items-center">
                  <button
                    className="btn btn-outline-secondary btn-lg px-4"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    style={{
                      opacity: currentStep === 0 ? 0.5 : 1,
                      cursor: currentStep === 0 ? 'not-allowed' : 'pointer'
                    }}
                  >
                    <FaArrowLeft className="me-2" />
                    Previous
                  </button>

                  <div className="text-center">
                    <div className="h5 mb-0 text-success fw-bold">${totalPrice.toFixed(2)}</div>
                    <small className="text-muted">Total Price</small>
                  </div>

                  {currentStep < steps.length - 1 ? (
                    <button
                      className="btn btn-primary btn-lg px-4"
                      onClick={nextStep}
                    >
                      Next
                      <FaArrowRight className="ms-2" />
                    </button>
                  ) : (
                    <button
                      className="btn btn-success btn-lg px-4"
                      onClick={addPizzaToCart}
                    >
                      <FaShoppingCart className="me-2" />
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .transition-all {
          transition: all 0.3s ease;
        }

        .hover-shadow:hover {
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          transform: translateY(-2px);
        }

        .cursor-pointer {
          cursor: pointer;
        }

        .card {
          position: relative;
        }

        /* Mobile Responsive Improvements */
        @media (max-width: 768px) {
          .btn {
            font-size: 14px !important;
            padding: 8px 12px !important;
          }

          .btn-lg {
            font-size: 16px !important;
            padding: 10px 16px !important;
          }

          .gap-2 {
            gap: 8px !important;
          }

          .flex-fill {
            min-width: 0;
          }
        }

        @media (max-width: 576px) {
          .btn {
            font-size: 13px !important;
            padding: 6px 10px !important;
          }

          .btn-lg {
            font-size: 14px !important;
            padding: 8px 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PizzaBuilder;
