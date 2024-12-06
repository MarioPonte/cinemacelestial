function PromotionCard({ title, description, background }) {
    return (
        <div
            className={`promotion-card bg-cover bg-center py-4 px-6 max-w-96 h-80 rounded-lg`}
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(30,64,175,1), rgba(30,27,75,0.25)), url('/${background}')`,
            }}
        >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default PromotionCard;
