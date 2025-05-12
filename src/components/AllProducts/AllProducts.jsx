// import React, { use, useEffect, useRef, useState } from 'react'
// import axios from 'axios'
// function AllProducts({ addToCart }) {

//   const [allProducts, setAllProducts] = useState([]);
//   const [orignalProducts, setOriginalProducts] = useState([])
//   const [allCategories, setAllCategories] = useState([])
//   const [selectProducts, setSelectProducts] = useState("")
//   const [searchItem, setSearchItem] = useState("");
//   const [minimumPrice, setMinimumPrice] = useState("")
//   const [maximumPrice, setMaximumPrice] = useState("")

//   useEffect(() => {
//     const AllProducts = async () => {
//       try {
//         const res = await axios('https://dummyjson.com/products');
//         setAllProducts(res.data.products);
//         setOriginalProducts(res.data.products)
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     AllProducts();
//   }, []);

//   useEffect(() => {
//     const getAllProductsCategory = async () => {
//       try {
//         const res = await axios('https://dummyjson.com/products/category-list')
//         setAllCategories(res.data)
//       }
//       catch (error) {
//         console.log(error)
//       }

//     }
//     getAllProductsCategory();
//   }, [])

//   const filterProducts = (selectCategory) => {
//     setSelectProducts(selectCategory);

//     const data = selectCategory
//       ? orignalProducts.filter(
//         (filterItem) => filterItem.category === selectCategory)
//       : orignalProducts
//     setAllProducts(data)
//   }


//   const handleSearchItem = () => {
//     const searchProduct = orignalProducts.filter((searchFilterItem) => (
//       searchFilterItem.title.toLowerCase().includes(searchItem.toLowerCase())
//     ))
//     setAllProducts(searchProduct);
//   }

//   const handlePrice = () => {
//     let min = parseFloat(minimumPrice)
//     let max = parseFloat(maximumPrice)
//     const filterPrice = orignalProducts.filter((priceItem) => (
//       (!min||priceItem.price >= min) && (!max||priceItem.price <= max)
//     ))
//     setAllProducts(filterPrice);
//   }
//   return (
//     <>
//       <div className="flex flex-col items-center justify-center pt-10">
//         <select
//           className='w-1/4 p-2 border border-gray-300 rounded-md shadow-md bg-blue-300'
//           onChange={(e) => filterProducts(e.target.value)}
//         >
//           <option value="">
//             Enter Category
//           </option>
//           {allCategories
//             .filter((filteritems) => !["groceries", "motorcycle", "vehicle", "furniture"].includes(filteritems))
//             .map((item, index) => (
//               <option
//                 value={item}
//                 key={index}
//                 className='px-4 py-2 bg-blue-100 text-black rounded-lg shadow-md hover:bg-blue-100 transition duration-300'
//               >
//                 {item}
//               </option>
//             ))}
//         </select>

//         <div className='text-center mt-3'>
//           <input placeholder='search item'
//             className='border-4 '
//             onChange={(e) => setSearchItem(e.target.value)}
//             value={searchItem}
//           >
//           </input>
//           <button onClick={handleSearchItem}>search product</button>
//         </div>

//         <div>
//         <input
//   placeholder='min price'
//   className='border-4 m-2 p-1'
//   onChange={(e) => setMinimumPrice(e.target.value)}
//   value={minimumPrice}
// />
// <input
//   placeholder='max price'
//   className='border-4 m-2 p-1'
//   onChange={(e) => setMaximumPrice(e.target.value)}
//   value={maximumPrice}
// />

//           <button onClick={handlePrice}>search product</button>
//         </div>


//         <div className='flex flex-wrap gap-6 mt-6 mb-6 justify-center'>
//           {
//             allProducts.map(
//               (allItems) => (
//                 <div key={allItems.id}
//                   className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden"
//                 >
//                   <img src={allItems.thumbnail} alt='' />
//                   <div className="p-4">
//                     <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
//                       Rating: {allItems.rating}
//                     </h3>
//                     <h2 className="text-gray-900 title-font text-lg font-medium">
//                       {allItems.title}
//                     </h2>
//                     <p className="mt-1 text-gray-700 font-semibold">
//                       Price: ${allItems.price}
//                     </p>
//                     <button
//                       onClick={() => addToCart(allItems)}
//                       className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out"
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               )
//             )
//           }
//         </div>

//       </div>
//     </>
//   )
// }

// export default AllProducts

//2nd
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { Toaster } from 'react-hot-toast';

function AllProducts({ addToCart }) {
  const [allProducts, setAllProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [minimumPrice, setMinimumPrice] = useState('');
  const [maximumPrice, setMaximumPrice] = useState('');

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios('https://dummyjson.com/products');
        setAllProducts(res.data.products);
        setOriginalProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllProducts();
  }, []);

  useEffect(() => {
    const fetchAllCategories = async () => {
      try {
        const res = await axios('https://dummyjson.com/products/category-list');
        setAllCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllCategories();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchItem, minimumPrice, maximumPrice, selectedCategory]);

  const applyFilters = () => {
    let filtered = originalProducts;

    if (selectedCategory) {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchItem) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchItem.toLowerCase())
      );
    }

    const min = parseFloat(minimumPrice);
    const max = parseFloat(maximumPrice);

    if (!isNaN(min)) {
      filtered = filtered.filter(item => item.price >= min);
    }

    if (!isNaN(max)) {
      filtered = filtered.filter(item => item.price <= max);
    }

    setAllProducts(filtered);
  };

  const clearFilters = () => {
    setSearchItem('');
    setMinimumPrice('');
    setMaximumPrice('');
    setSelectedCategory('');
    setAllProducts(originalProducts);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <Toaster />
      {/* Category Selector */}
      <select
        className="w-1/3 p-2 border border-gray-300 rounded-md shadow-md bg-blue-100 focus:ring-2 focus:ring-blue-400 transition"
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <option value="">Select Category</option>
        {allCategories
          .filter(cat => !['groceries', 'motorcycle', 'vehicle', 'furniture'].includes(cat))
          .map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
      </select>

      {/* Search Input */}
      <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
        <input
          placeholder="Search item"
          className="w-64 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>

      {/* Price Filter Inputs */}
      <div className="flex items-center gap-4 mt-4 flex-wrap justify-center">
        <input
          placeholder="Min price"
          className="w-32 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          value={minimumPrice}
          onChange={(e) => setMinimumPrice(e.target.value)}
        />
        <input
          placeholder="Max price"
          className="w-32 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          value={maximumPrice}
          onChange={(e) => setMaximumPrice(e.target.value)}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        <button
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md shadow-md transition-all"
          onClick={applyFilters}
        >
          Apply Filters
        </button>
        <button
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md shadow-md transition-all"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      {/* Products Display */}
      <div className="flex flex-wrap gap-6 mt-6 mb-6 justify-center">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden transition hover:scale-105 duration-300"
          >
            <Link to={`/SinglePage/${product.id}`}>
              <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Rating: {product.rating}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                {product.title}
              </h2>
              <p className="mt-1 text-gray-700 font-semibold">
                Price: ${product.price}
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 ease-in-out"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
