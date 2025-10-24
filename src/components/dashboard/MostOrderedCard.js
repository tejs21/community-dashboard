export function MostOrderedCard({ foodItems }) { 
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm h-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Most Ordered Food</h3>
      <p className="text-sm text-gray-500 mb-4">Adipiscing elit, sed do eiusmod tempor</p>
      <div className="space-y-4">
        {foodItems.length > 0 ? (
          foodItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                <span className="font-medium text-gray-700">{item.name}</span>
              </div>
              <span className="font-semibold text-gray-800">IDR {item.price.toLocaleString('id-ID')}</span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-8">No items match your search.</p>
        )}
      </div>
    </div>
  );
}