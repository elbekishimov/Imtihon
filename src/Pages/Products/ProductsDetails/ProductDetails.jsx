import { Link, useNavigate, useParams } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams(); // to'g'ri param
    const navigate = useNavigate();

    const data = localStorage.getItem("userProduct");
    const products = data ? JSON.parse(data) : [];

    const result = products.find((item) => item.id === Number(id));

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
                <h2 className="text-2xl font-semibold mb-4">{result.name}</h2>
                <p className="text-gray-600 mb-6">{result.description}</p>
                <h6 className="mb-4">{result.price} so'm</h6>
                <img src={result.image} alt={result.name} className="mb-4 mx-auto rounded" />
                <div className="flex gap-3 justify-center">
                    <button onClick={() => navigate(-1)} className="px-4 py-2 rounded bg-gray-200">
                        Go back
                    </button>
                    <Link to="/products" className="px-4 py-2 rounded bg-blue-600 text-white">
                        View products
                    </Link>
                </div>
            </div>
        </div>
    );
}
