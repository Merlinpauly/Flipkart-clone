import { useState } from "react";

interface FilterSidebarProps {
  minPrice: number;
  maxPrice: number;
  brands: string[];
  selectedBrand: string;
  selectedMaxPrice: number;
  onBrandChange: (brand: string) => void;
  onPriceChange: (price: number) => void;
}

function FilterSidebar({
  minPrice,
  maxPrice,
  brands,
  selectedBrand,
  selectedMaxPrice,
  onBrandChange,
  onPriceChange,
}: FilterSidebarProps) {
  const [showBrands, setShowBrands] = useState(true);

  return (
    <div className="filter-sidebar">
      <h3>Filters</h3>

      {/* Price Filter */}
      <div className="filter-section">
        <h4>Price</h4>

        <label htmlFor="price">
          Maximum Price: ${selectedMaxPrice}
        </label>

        <input
          id="price"
          type="range"
          min={minPrice}
          max={maxPrice}
          value={selectedMaxPrice}
          onChange={(event) =>
            onPriceChange(Number(event.target.value))
          }
        />

        <div className="price-range">
          <span>${minPrice}</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="filter-section">
        <button
          className="brand-heading"
          onClick={() => setShowBrands(!showBrands)}
        >
          Brand
          <span>{showBrands ? "−" : "+"}</span>
        </button>

        {showBrands && (
          <div className="brand-options">
            <label>
              <input
                type="radio"
                name="brand"
                value=""
                checked={selectedBrand === ""}
                onChange={() => onBrandChange("")}
              />

              All Brands
            </label>

            {brands.map((brand) => (
              <label key={brand}>
                <input
                  type="radio"
                  name="brand"
                  value={brand}
                  checked={selectedBrand === brand}
                  onChange={() => onBrandChange(brand)}
                />

                {brand}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterSidebar;