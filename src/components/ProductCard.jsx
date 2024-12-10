function ProductCard({ name, info, price, discount, image }) {
    return (
        <div className="flex gap-4 p-4 border border-white/25 rounded-xl w-fit">
            <img src={image} alt={name} className="h-28 w-28 rounded-xl border border-white/25" />
            <div className="flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <span>{info}</span>
                </div>
                <div className="flex gap-2 items-center">
                    <span className="text-xl font-semibold">{price}€</span>
                    {discount && <span className="text-xs border border-white/25 rounded-md text-white/25 p-1">{discount}% de desconto</span>}
                </div>
            </div>
        </div>
    )
}

export default ProductCard;