import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import MenuCategory from '../components/menu/MenuCategory';
import { getDietaryIcon, DIETARY_ICONS } from '../utils/dietaryUtils';
import menuData from '../data/menuData';
import '../styles/MenuPage.css';
import '../styles/pages/Menu.css';

if (!menuData || !Array.isArray(menuData.categories)) {
  console.error('Invalid menu data format');
  menuData = { categories: [] };
}

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilters, setDietaryFilters] = useState(
    Object.keys(DIETARY_ICONS).reduce((acc, key) => ({
      ...acc,
      [key]: false
    }), {})
  );

  useEffect(() => {
    try {
      const category = searchParams.get('category');
      setActiveCategory(category || 'all');
    } catch (error) {
      console.error('Error getting search params:', error);
      setActiveCategory('all');
    }
  }, [searchParams]);

  const filteredMenu = menuData.categories.map(category => {
    if (!category || typeof category !== 'object') return { items: [] };

    if (activeCategory !== 'all' && category.id !== activeCategory) {
      return { ...category, items: [] };
    }

    let filteredItems = Array.isArray(category.items) ? [...category.items] : [];

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredItems = filteredItems.filter(item =>
        item &&
        ((item.name && item.name.toLowerCase().includes(query)) ||
          (item.description && item.description.toLowerCase().includes(query)) ||
          (Array.isArray(item.dietary) && item.dietary.some(diet =>
            (DIETARY_ICONS[diet]?.label || '').toLowerCase().includes(query)
          )))
      );
    }

    const activeFilters = Object.entries(dietaryFilters)
      .filter(([_, isActive]) => isActive)
      .map(([filter]) => filter);

    if (activeFilters.length > 0) {
      filteredItems = filteredItems.filter(item =>
        item &&
        Array.isArray(item.dietary) &&
        activeFilters.every(filter => item.dietary.includes(filter))
      );
    }

    return { ...category, items: filteredItems };
  }).filter(category => category.items.length > 0);

  const toggleDietaryFilter = (filter) => {
    setDietaryFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSearchParams({});
    setDietaryFilters(
      Object.keys(DIETARY_ICONS).reduce((acc, key) => ({
        ...acc,
        [key]: false
      }), {})
    );
  };

  const hasActiveFilters = Object.values(dietaryFilters).some(Boolean) || searchQuery;
  const hasResults = filteredMenu.some(category => category.items.length > 0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="menu-page py-5">
        <div className="container">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="display-4 fw-bold mb-3">Our Menu</h1>
            <p className="lead text-muted">
              Discover our delicious selection of Italian and international dishes
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="d-flex justify-content-center flex-wrap gap-3 mb-4">
              <button
                className={`btn px-4 py-2 ${activeCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                style={{
                  borderRadius: '25px',
                  fontWeight: '600',
                  fontSize: '14px',
                  transition: 'all 0.3s ease',
                  border: activeCategory === 'all' ? 'none' : '2px solid #e74c3c',
                  backgroundColor: activeCategory === 'all' ? '#e74c3c' : 'transparent',
                  color: activeCategory === 'all' ? 'white' : '#e74c3c'
                }}
                onClick={() => setSearchParams({})}
                onMouseEnter={(e) => {
                  if (activeCategory !== 'all') {
                    e.target.style.backgroundColor = '#e74c3c';
                    e.target.style.color = 'white';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== 'all') {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#e74c3c';
                  }
                }}
              >
                All Items
              </button>
              {menuData.categories.map((category) => (
                <button
                  key={category.id}
                  className={`btn px-4 py-2 ${activeCategory === category.id ? 'btn-primary' : 'btn-outline-primary'}`}
                  style={{
                    borderRadius: '25px',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.3s ease',
                    border: activeCategory === category.id ? 'none' : '2px solid #e74c3c',
                    backgroundColor: activeCategory === category.id ? '#e74c3c' : 'transparent',
                    color: activeCategory === category.id ? 'white' : '#e74c3c'
                  }}
                  onClick={() => setSearchParams({ category: category.id })}
                  onMouseEnter={(e) => {
                    if (activeCategory !== category.id) {
                      e.target.style.backgroundColor = '#e74c3c';
                      e.target.style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== category.id) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#e74c3c';
                    }
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            className="row mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="col-lg-10 mx-auto">
              <div className="input-group mb-3">
                <span className="input-group-text bg-white">
                  <FaSearch className="text-muted" />
                </span>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Search menu items, ingredients, or dietary preferences..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#filtersCollapse"
                  aria-expanded="false"
                  aria-controls="filtersCollapse"
                >
                  <FaFilter className="me-2" />
                  Filters
                </button>
              </div>

              {/* Dietary Filters */}
              <div className="collapse mt-3" id="filtersCollapse">
                <div className="card card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="mb-0 fw-bold">Dietary Preferences</h6>
                    {hasActiveFilters && (
                      <button
                        className="btn btn-sm btn-link text-decoration-none p-0"
                        onClick={resetFilters}
                      >
                        Reset all
                      </button>
                    )}
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {Object.entries(DIETARY_ICONS).map(([key, { label }]) => (
                      <button
                        key={key}
                        className={`dietary-filter-btn btn ${dietaryFilters[key] ? 'btn-primary' : 'btn-outline-secondary'
                          } d-flex align-items-center gap-2`}
                        onClick={() => toggleDietaryFilter(key)}
                      >
                        {getDietaryIcon(key, 14)}
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Active Filters Badges */}
          <AnimatePresence>
            {hasActiveFilters && (
              <motion.div
                className="mb-4 px-3"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="d-flex flex-wrap align-items-center gap-2">
                  <span className="small text-muted me-2">Active filters:</span>
                  {searchQuery && (
                    <motion.span
                      className="badge bg-secondary d-flex align-items-center gap-1 active-filter-badge"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      Search: "{searchQuery}"
                      <button
                        className="btn-close btn-close-white btn-close-sm ms-1"
                        onClick={() => setSearchQuery('')}
                        aria-label="Clear search"
                      />
                    </motion.span>
                  )}
                  {Object.entries(dietaryFilters)
                    .filter(([_, isActive]) => isActive)
                    .map(([filter]) => (
                      <motion.span
                        key={filter}
                        className="badge bg-primary d-flex align-items-center gap-1 active-filter-badge"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                      >
                        {DIETARY_ICONS[filter]?.label || filter}
                        <button
                          className="btn-close btn-close-white btn-close-sm ms-1"
                          onClick={() => toggleDietaryFilter(filter)}
                          aria-label={`Remove ${filter} filter`}
                        />
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Menu Categories */}
          <AnimatePresence mode="wait">
            {hasResults ? (
              <motion.div
                className="row"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                key="menu-items"
              >
                {filteredMenu.map((category) =>
                  category.items.length > 0 ? (
                    <motion.div
                      key={category.id}
                      className="col-12 mb-5"
                      variants={itemVariants}
                    >
                      <div className="text-center mb-5">
                        <h2 className="h2 mb-3" style={{
                          fontFamily: "'Playfair Display', serif",
                          color: '#2c3e50',
                          fontWeight: '700'
                        }}>{category.name}</h2>
                        <div className="mx-auto mb-3" style={{
                          width: '60px',
                          height: '3px',
                          background: 'linear-gradient(90deg, #e74c3c, #c0392b)',
                          borderRadius: '2px'
                        }}></div>
                        <p className="text-muted" style={{ fontSize: '16px' }}>{category.description}</p>
                      </div>
                      <div className="row g-4">
                        {category.items.map((item) => (
                          <motion.div
                            key={item.id}
                            className="col-lg-4 col-md-6 col-sm-12"
                            variants={itemVariants}
                            style={{ height: 'fit-content' }}
                          >
                            <MenuCategory item={item} />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : null
                )}
              </motion.div>
            ) : (
              <motion.div
                className="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="no-results"
              >
                <div className="mb-4">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 8V12" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 16H12.01" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mb-3">No menu items found</h3>
                <p className="text-muted mb-4">We couldn't find any items matching your search or filters.</p>
                <button
                  className="btn btn-primary px-4"
                  onClick={resetFilters}
                >
                  Clear all filters
                </button>
                <p className="mt-3 mb-0">
                  <small className="text-muted">
                    Can't find what you're looking for? <Link to="/contact" className="text-primary">Contact us</Link> for special requests.
                  </small>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Menu;
