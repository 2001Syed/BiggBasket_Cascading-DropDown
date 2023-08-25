import React, { useState } from 'react'
import "./App.css"
function App() {

  const option1 = [
    "--Select Options--","Fruits & Vegetables", "Foodgrains, Oil & Masala" ,"Bakery, Cakes & Dairy","Beverages","Snacks & Branded Foods","Beauty & Hygeine", "Cleaning & Household", "Kitchen, Garden & Pets", "Eggs, Meat & Fish","Gourment & World Food", "Baby Care"
  ]

  const option2 = {
    "Fruits & Vegetables":["--Select--","Fresh Vegetables","Herbs & Seasonings","Fresh Fruits","Organic Fruits & Vegetables", "Cuts & Sprouts","Exotic Fruits & Veggies","Flower Boutiquets, Bunches",],
    "Foodgrains, Oil & Masala":["--Select--","Atta, Flour & Sooji","Rice & Rice Products","Dals & Pulses","Organic Staples","Edible Oils & Ghee","Salt, Sugar & Jaggery","Masalas & Spices","Dryfruits"],
    "Bakery, Cakes & Dairy":["--Select--","Dairy","Breads & Buns","Non Dairy","Gourmet Bread","Cookies, Rusk & Khari","Ice Creams & Desserts","Bakery Snacks","Cakes & Pastries"],
    "Beverages":["--Select--","Energy & Soft Drinks","Water","Health Drink, Supplement","Tea","Coffee","Fruit Juices & Drinks"],
    "Snacks & Branded Foods":["--Select--","Noodle, Pasta, Vermicelli","Breakfast Cereals","Frozen Veggies & Snacks","Biscuits & Cookies","Snacks & Namkeen","Spreads, Sauces, Ketchup","Ready To Cook & Eat","Chocolates & Candles","Pickles & Chutney","Indian Mithai"],
    "Beauty & Hygeine":["--Select--","Oral Care","Feminine Hygiene","Bath & Hand Wash","Hair Care","Health & Medicine","Men's Grooming","Skin Care","Makeup","Fragrances & Deos"],
    "Cleaning & Household":["--Select--","Detergents & Dishwash","All Purpose Cleaners","Disposables, Garbage Bag","Fresheners & Repellents","Mops, Brushes & Scrubs","Car & Shoe Care","Pooja Needs","Stationery","Bins & Bathroom Ware","Party & Festive Needs"],
    "Kitchen, Garden & Pets":["--Select--","Pet Food & Accessories","Appliances & Electricals","Steel Utensils","Gardening","Kitchen Accessories","Cookware & Non Stick","Flask & Casserole","Bakeware","Crockery & Cutlery","Storage & Accessories"],
    "Eggs, Meat & Fish":["--Select--","Eggs","Poultry","Sausages, Bacon & Salomi","Mutton & Lamb","Marinades","Fish & Seafood","Pork & Other Meats"],
    "Gourment & World Food":["--Select--","Oils & Vinegar","Dairy & Cheese","Snacks, Dry Fruits, Nuts","Pasta, Soup & Noodles","Cereals & Breakfast","Sauces, Spreads & Dips","Chocolates & Biscuits","Cooking & Baking Needs","Drinks & Beverages","Tinned & Processed Food"],
    "Baby Care":["--Select--","Diapers & Wipes","Baby Bath & Hygeine","Baby Food & Formula","Mothers & Maternity","Feeding & Nursing","Baby Accessories"],
    "--Select Options--":[]
  }

  const option3 = {
    'Fresh Vegetables':["--Select--","Potato, Onion & Tomato","Cucumber & Capsicum","Leafy Vegetables","Root Vegetables","Beans, Brinjals & Okra","Cabbage & CauliFlower","Gourd, Pumpkin, Drumstick","Speciality"],
    "Herbs & Seasonings":["--Select--","Lemon, Ginger & garlic","Indian & Exotic Herbs"],
    "Dairy":["--Select--","Milk","Curd","Paneer, Tofu & Cream", "Butter & Margarine","Condensed, Powdered Milk","Cheese","Buttermilk & Lassi","Yogurt & Shrikhand","Flavoured, Soya Milk"],
    "Atta, Flour & Sooji":["--Select--","Atta Whole Wheat","Sooji, Maida & Besan","Rice & Other Flours"],
    "Energy & Soft Drinks":["--Select--","Soda & Cocktail Mix","Cold Drinks","Sports & Energy Drinks","Non-Alcoholic Drinks"],
    "Noodle, Pasta, Vermicelli":["--Select--","Instant Noodles","Hakka Noodles","Cup Noodles","Vermicelli","Instant Pasta","Pasta & Macaroni"],
    "Oral Care":["--Select--","Toothpaste","Mouthwash","Toothbrush","Floss & Tongue Cleaner","Electric Toothbrush"],
    "Detergents & Dishwash":["--Select--","Detergent Powder, Liquid","Fabric Pre, Post Wash","Dishwash Liquids & Pastes","Dishwash Bars & Powders","Detergent Bars"],
    "Pet Food & Accessories":["--Select--","Pet Meals & Treats","Pet Feeding Support","Pet Cleaning & Grooming","Pet Collars & Leashes","Pet Toys"],
    "Eggs":["--Select--","Farm Eggs","Country Eggs","Protein Eggs","Organic Eggs","Other Eggs"],
    "Oils & Vinegar":["--Select--","Extra Virgin Olive Oil","Canola & Rapeseed Oil","Pure, Pomace Olive Oil","Bolsamic & Cider Vinegar","Organic & Cold Press Oil","Regular & White Vinegar","Flavoured & Other Oils","Wine & Rice Vinegar"],
    "Diapers & Wipes":["--Select--","Diapers","Baby Wipes","Nappies & Rash Cream"],
    "Fresh Fruits":["--Select--","Banana, Sapota & Papaya","Kiwi, Melon, Citrus Fruit","Apples & Pomegranate","Seasonal Fruits","Mangoes","Fruit Baskets"],
    "Organic Fruits & Vegetables":["--Select--","Organic Vegetables","Organic Fruits"],
    "Cuts & Sprouts":["--Select--","Cut Fruit, Tender Coconut","Cut & Peeled Veggies","Fresh Salads & Sprouts","Recipe Packs"],
    "Exotic Fruits & Veggies":["--Select--","Exotic Vegetables","Exotic Fruits"],
    "Flower Boutiquets, Bunches":["--Select--","Marigold","Other Flowers","Roses"],
    "Rice & Rice Products":["--Select--","Raw Rice","Poha, Sabudana & Murmuro","Basmati Rice","Boiled & Steam Rice"],
    "Dals & Pulses":["--Select--","Toor, Channa & Moong Dal","Cereals & Millets","Urad & Other Date"],
    "Organic Staples":["--Select--","Organic Dry Fruits","Organic Dals & Pulses","Organic Millets & Flour","Organic Sugar, Jaggery","Organic Masalad & Spices","Organic Rice, Other Rice","Organic Flour","Organic Edible Oil, Ghee"],
    "Edible Oils & Ghee":["--Select--","Blended Cooking Oils","Sunflower, Rice Bran Oil","Soya & Mustard Oils","Ghee & Vanaspati","Gingelly Oil","Groundnut Oil","Cooking Coconut Oil","Olive & Canola Oils","Other Edible Oils","Cold Pressed Oil"],
    "Salt, Sugar & Jaggery":["--Select--","Sugar & Jaggery","Salts","Sugarfree Sweetners"],
    "Masalas & Spices":["--Select--","Whole Spices","Powdered Spices","Cooking Pastes","Herbs & Seasoning","Blended Masalas"],
    "Dryfruits":["--Select--","Almonds","Cashews","Raisins","Mukhwas","Other Dry Fruits"],
    "Breads & Buns":["--Select--","Brown, Wheat & Multigrain","Milk, White & Sandwitch","Buns, Pavs & Pizza Base"],
    "Non Dairy":["--Select--","Dairy Free(Vegan)"],
    "Gourmet Bread":["--Select--","Croissants, Bagels","Panini, Focaccia & Pita","Bagels & Baguette","Gourmet Bread"],
    "Cookies, Rusk & Khari":["--Select--","Rusks","Khari & Cream Rolls","Premium Cookies","Bakery Biscuits, Cookies"],
    "Ice Creams & Desserts":["--Select--","Ice Creams"],
    "Bakery Snacks":["--Select--","Bread Sticks & Lavash","Cheese & Garlic Bread","Puffs, Patties, Sandwiches","Breadcrumbs & Croutons"],
    "Cakes & Pastries":["--Select--","Tea Cakes & Slice Cakes","Muffins & Cup Cakes","Pastries & Brownies","Birthday & Party Cakes","Doughnuts & Mousses"],
    "Water":["--Select--","Packaged Water","Spring Water","Flavoured Water"],
    "Health Drink, Supplement":["--Select--","Kids(5+Yrs)","Children(2-5 Yrs","Men & Women","Diabetic Drinks","Glucose Powder, Tablets"],
    "Tea":["--Select--","Leaf & Dust Tea","Green Tea","Exotic & Flavoured Tea","Tea Bags"],
    "Coffee":["--Select--","Ground Coffee","Instant Coffee"],
    "Fruit Juices & Drinks":["--Select--","Unsweetened, Cold Press","Juices","Signups & Concentrates"],
    "Breakfast Cereals":["--Select--","Oats & Porridge","Kids Cereal","Muesli","Flakes","Garnola & Cereal Bars"],
    "Frozen Veggies & Snacks":["--Select--","Frozen Vegetables","Frozen Indian Breads","Frozen Veg Snacks","Frozen Non-Veg Snacks"],
    "Biscuits & Cookies":["--Select--","Salted Biscuits","Marie, Health, Digestive","Cream Biscuit & Wafers","Glucose & Milk Biscuits","Cookies"],
    "Snacks & Namkeen":["--Select--","Chips & Corn Snacks","Namkeen & Savoury Snacks"],
    "Spreads, Sauces, Ketchup":["--Select--","Honey","Mayonnaise","Tomato Ketchup & Sources","Jam, Conserve, Marmalade","Chilli &Soya Sauce","Choco & Nut Spread","Vinegar","Dips & Dressings"],
    "Ready To Cook & Eat":["--Select--","Breakfast & Snack Mixes"],
    "Chocolates & Candles":["--Select--","Chocolates","Toffee, Cody & Lollypop","Mints & Chewing Gum","Git Boxes"],
    "Pickles & Chutney":["--Select--","Chutney Powder" ,"Lime & Mango Pickle","Other Veg Pickle","Non Veg Pickle"],
    "Indian Mithai":["--Select--","Child & Gajjak","Tinned, Paked Sweets","Fresh Sweets"],
    "Feminine Hygiene":["--Select--","Sanitary Napkins","Panty Linears","Intimate Wash & Care","Hair Removal","Tompons & Menstrual Cups"],
    "Bath & Hand Wash":["--Select--","Hand Wash & Sanitier","Bathing Bars & Soaps","Shower Gel & Body Wash","Talcumm Powder","Bathing Accessories","Bath Salts & Oils","Body Scrubs & Exfoliants"],
    "Hair Care":["--Select--","Hair Color","Hair Oil & Serum","Shampoo & Conditioner","Hair & Scalp Treatment","Hair Styling","Dry Shampoo & Conditioner","Tools & Accessories"],
    "Health & Medicine":["--Select--","Antiseptics & Bandages","Cotton & Ear Buds","Everyday Medicine","Sexual Wellness","Face Masks & Safety Gears","Ayurveda","Supplements & Proteins","Adult Diapers","Slimming Products"],
    "Men's Grooming":["--Select--","Shaving Care","Face & Body","Both & Shower","Tolc","Hair Care & Styling","Moustache & beard"],
    "Skin Care":["--Select--","Body Care","Face Care","Lip Care","Eye Care","Aromatherapy"],
    "Makeup":["--Select--","Nails","Face","Lips","Eyes","Makeup Accessories","MAkeup Kits and Gift set"],
    "Fragrances & Deos":["--Select--","Gift sets","Women's Deodrants","Men's deodrants","Perfume","Eau De Cologne","Body Sprays & Mists","Eau De Parfum","Eau de Toilette", "attar"],
    "All Purpose Cleaners":["--Select--","Toilet Cleaners","Kitchen, Glass & Drain","Floor & Other Cleaners","Disinfectant Spray & Cleaners","Descaler","Metal, Furniture Cleaner","Imported Cleaners"],
    "Disposables, Garbage Bag":["--Select--","Kitchen Rolls","Wet Wipe, Pocket Tissues","Garbage Bags","Toilet Paper","Aluminium Foil, Clingwrap","Paper Napkin, Tissue Box"],
    "Fresheners & Repellents":["--Select--","Insect Repellent","Mosquito Repellent","Air Freshner"],
    "Mops, Brushes & Scrubs":["--Select--","Utensil Scrub-Pad, Glove","Brooms & Dust Pans","Dust Cloth & Wipes","Mops, Wipers","Toilet & Other Brushes"],
    "Car & Shoe Care":["--Select--","Car Freshner","Shoe Polish","Car Polish & Cleaners","Shoe Shinners & Brushes"],
    "Pooja Needs":["--Select--","Comphor & Wicks","Lamp & Lamp Oil","Candles & Match Box","Agarbatti, Incense Sticks","Other Pooja Needs","Pooja Thali & Bells"],
    "Stationery":["--Select--","Notebooks, Files, Folders","Scissor, Glue & Tape","Pen, Pencils","Colours & Crayons","Erasers & Sharpners","Exam Pads & Pencil Box","Games & Calulators","Electronic Accessories"],
    "Bins & Bathroom Ware":["--Select--","Hangers, Clips & Rope","Buckets & Mugs","Dustbins","Laundry, Storage Baskets","Soap Cases & Dispensers","Bath Stool, Basin & Sets","Other Plastic Ware"],
    "Party & Festive Needs":["--Select--","Disposable Cups & Plates","Caps, Balloons & Candles","Gift Wraps & Bags","Decorations","Seasonal Accessories","Gifts"],
    "Appliances & Electricals":["--Select--","Battery & Electrical","LED Bulbs & Battens"],
    "Steel Utensils":["--Select--","Steel Storage Containers","Plates & Tumbler","Copper Utensils","Bowls & Vessels","Steel Lunch Boxes"],
    "Gardening":["--Select--","Fertilizers & Pesticides","Gardening Tools","Pots, Planters & Trays","Seeds & Sapling"],
    "Kitchen Accessories":["--Select--","Lighters","Strainer, Ladle, Spatula","Choppers & Graters","Kitchen Tools & Other Accessories","Knives & Peelers"],
    "Cookware & Non Stick":["--Select--","Gas Stove","Tawa & Sauce Pan","Pressure Cookers","Cookware Sets","Kadai & Fry Pans","Cook And Serve","Microwavable Cookware"],
    "Flask & Casserole":["--Select--","Vaccum Flask","Casserole"],
    "Bakeware":["--Select--","Baking Tools & Brushes","Bakeware Accessories","Bakeware Moulds, Cutters"],
    "Crockery & Cutlery":["--Select--","Glassware","Cups, Mugs & Tumblers","Plates & Bowls","Dinner Sets","Cuitlery, Spoon & Fork"],
    "Storage & Accessories":["--Select--","Wall Hooks & Hangers","Containers Sets","Water & Fridge Bottles","Umbrella","Racks & Holders","Lunch Boxes","Cloth Dryer & Iron Table"],
    "Poultry":["--Select--","Turkey","Fresh Chicken","Frozen Chicken"],
    "Sausages, Bacon & Salomi":["--Select--","Chicken Sausages","Pork & Ham","Turkey & Duck","Lamb"],
    "Mutton & Lamb":["--Select--","Fresh Mutton","Frozen Mutton"],
    "Marinades":["--Select--","Marinated Meat"],
    "Fish & Seafood":["--Select--","Fresh Water Fish","Dry Fish","Frozen Fish & Seafood","Marine Water Fish","Canned Seafood","Prawns & Shrimps","Other Seafood"],
    "Pork & Other Meats":["--Select--","Fresh And Frozen Pork"],
    "Dairy & Cheese":["--Select--","Flavoured & Greek Yougurt","Tofu","Milk & Soya Drinks","Cream & Cheese Spreads","International Cheese","Gourmet Ice Cream","Butter & Cream"],
    "Snacks, Dry Fruits, Nuts":["--Select--","Nachos & Chips","Dry Fruits& Bierries","Gourmet Popcorn","Healthy, Baked Snacks","Roasted Seeds & Nuts","Trail & Cocktail Mixes"],
    "Pasta, Soup & Noodles":["--Select--","Pastas & Spaghetti","Imported Noodles","Imported Soups","Jasmine & Sushi Rice"],
    "Cereals & Breakfast":["--Select--","Muesli & Rice Cakes","Imported Oats & Porridge","Cereal & Granola Bars","Gourmet Flakes"],
    "Sauces, Spreads & Dips":["--Select--","Chocolate, Peanut Spread","Jams, Marmalade, Spreads","Hummus, Cheese, Salsa Dip","Musturd & Cheese Sauces","Salad Dressings","Thai & Asian Sauces","Honey & Maple Syrup"],
    "Chocolates & Biscuits":["--Select--","International Chocolates","Luxury Chocolates, Gifts","Crackers & Digestive","Marshmallow, Candy, Jelly","Cookies, Biscotti","Wafer"],
    "Cooking & Baking Needs":["--Select--","Curry Paste, Coconut Milk","Cooking Chocolate, Cocoa","Exotic Sugar & Salt","Quinoo & Grains","Baking, Cake Decorations","Flours & Pre-Mixes","Baking Accessories","Herbs, Seasonings & Rubs"],
    "Drinks & Beverages":["--Select--","Coffee & Pre-Mix","Aerated, Still, Sparkling","Cocktail Mixes","Health Drinks","Non-Alcoholic Beer, Wine","Gourmrt Juices & Drinks","Gourment Tea & Tea Bags"],
    "Tinned & Processed Food":["--Select--","Olive, Jalapeno, Gherkin","Beans & Pulses","Fruits & Pulps","Tomatoes & Vegetables","Fish & Tuna","Meats & Sausages"],
    "Baby Bath & Hygeine":["--Select--","Baby Bath","Baby Oil & Shampoo","Baby Buds","Baby Creams & Lotions","Baby Powder","Baby Laundry","Baby Oral Care","Baby Health","Baby Gift Sets"],
    "Baby Food & Formula":["--Select--","Infant Formula","Baby Food","Organic Baby Food"],
    "Mothers & Maternity":["--Select--","Maternity Health Supplements","Maternity Personal Care"],
    "Feeding & Nursing":["--Select--","Nursing Tools","Skippers & Bottles","Baby Dishes & Utensils","Bibe & Napkins"],
    "Baby Accessories":["--Select--","Other Baby Accessories","Combs, Brushes, Clippers","Soothers & Teethers","Baby Toys","Kids Deo"],
    "--Select--":[]
  }

  const [selectedOption1, setSelectedOption1] = useState("")

  const [selectedOption2, setSelectedOption2] = useState("")

  return (
    <div className='main-container'>
      <div className='bigg-basket-container '>
        <img src="https://hindubabynames.info/wp-content/themes/hbn_download/download/e-commerce-companies/bigbasket-logo.png" className='img1' alt="" />
        <select className="select sone" onChange={(e)=> {
          setSelectedOption1(e.target.value)
        }}>
          {
            option1.map(x=>{
              return <option className='option oone'>{x}</option>
            })
          }
        </select>

        {
          selectedOption1 && <select className='select stwo' onChange={(e) => {
            setSelectedOption2(e.target.value)
          }}>
            {
              option2[selectedOption1].map(y =>{
                return <option className='option 0two'>{y}</option>
              })
            }
          </select>
        }

        {
          selectedOption2 && <select className='select sthree'>
            {
              option3[selectedOption2].map(z =>{
                return <option className='option othree'>{z}</option>
              })
            }
          </select>
        }
      </div>
    </div>
  )
}

export default App
