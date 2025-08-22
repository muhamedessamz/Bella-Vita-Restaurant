import { FaLeaf, FaPepperHot, FaBreadSlice, FaFish, FaCheese, FaSeedling, FaRegSnowflake } from 'react-icons/fa';

export const DIETARY_ICONS = {
  vegetarian: {
    icon: FaLeaf,
    color: 'success',
    label: 'Vegetarian'
  },
  vegan: {
    icon: FaSeedling,
    color: 'success',
    label: 'Vegan'
  },
  'gluten-free': {
    icon: FaBreadSlice,
    color: 'warning',
    label: 'Gluten Free'
  },
  spicy: {
    icon: FaPepperHot,
    color: 'danger',
    label: 'Spicy'
  },
  'dairy-free': {
    icon: FaCheese,
    color: 'info',
    label: 'Dairy Free'
  }
};

export const getDietaryIcon = (type, size = 16) => {
  const IconComponent = DIETARY_ICONS[type]?.icon;
  const color = DIETARY_ICONS[type]?.color || 'secondary';
  const label = DIETARY_ICONS[type]?.label || type;
  
  return IconComponent ? (
    <span 
      className={`d-inline-flex align-items-center text-${color} me-2`}
      title={label}
      style={{ fontSize: `${size}px` }}
    >
      <IconComponent />
    </span>
  ) : null;
};

export const getDietaryBadges = (dietaryTypes, size = 14) => {
  if (!dietaryTypes || dietaryTypes.length === 0) return null;
  
  return (
    <div className="d-flex flex-wrap gap-1 mt-1">
      {dietaryTypes.map((type) => (
        <span key={type} className="d-inline-flex align-items-center">
          {getDietaryIcon(type, size)}
        </span>
      ))}
    </div>
  );
};

export const formatDietaryRestrictions = (dietaryTypes) => {
  if (!dietaryTypes || dietaryTypes.length === 0) return '';
  return dietaryTypes.map(type => DIETARY_ICONS[type]?.label || type).join(', ');
};
