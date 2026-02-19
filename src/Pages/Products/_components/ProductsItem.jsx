import { useNavigate, useNavigation } from "react-router-dom"


export default function ProductItem({ product }) {
    const navigate = useNavigate();

    const handlBuy = (id) => {
        navigate(`/products/${id}`)
    }

    return (
        <div className="border rounded-md p-4">
            <div className="w-full h-[250px] rounded-md border mb-3">
                <img className="w-full h-full object-cover" src={product.image} alt="" />
            </div>
            <div className="px-4">
                <h5 className="mb-2 line-clamp-2">{product.name}</h5>
                <h4 className="mb-3 text-[15px] font-bold">${product.price}</h4>
                <p className="mb-2 text-[10px] text-gray-600 line-clamp-3">{product.description}</p>
                <button onClick={() => handlBuy(product.id)} className="px-5 py-2 rounded cursor-pointer bg-red-600 text-white">Sotib olish</button>
            </div>
        </div>
    )
}
