import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Statistics = () => {
    const products = [
        { id: 1, product_name: "Apple Watch Ultra", price: 799 },
        { id: 2, product_name: "HP Spectre x360 14", price: 1499 },
        { id: 3, product_name: "Lenovo ThinkPad X1 Carbon Gen 10", price: 1699 },
    ];

    return (
        <div className="p-2">
            <BarChart width={400} height={300} data={products}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product_name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistics;
