import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = localStorage.getItem("userProduct");
    const products = data ? JSON.parse(data) : [];

    const result = products.find((item) => String(item.id) === id);

    if (!result) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-xl">Mahsulot topilmadi</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-xl w-full text-center">
                <div className="border rounded-md p-4">
                    <div className="w-full h-[250px] rounded-md border mb-3">
                        <img className="w-full h-full object-cover" src={result.image} alt="" />
                    </div>
                    <div className="px-4">
                        <h5 className="mb-2 line-clamp-2">{result.name}</h5>
                        <h4 className="mb-3 text-[15px] font-bold">${result.price}</h4>
                        <p className="mb-2 text-[10px] text-gray-600 line-clamp-3">{result.description}</p>
                        <button onClick={() => navigate(-1)} className="px-5 py-2 rounded cursor-pointer bg-red-600 text-white">Sotib olish</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
