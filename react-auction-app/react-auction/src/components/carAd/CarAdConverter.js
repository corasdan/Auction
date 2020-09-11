export const CarAdDtoToCarAd = (obj) => {
    const carAd = {
        image: obj.image,
        title: obj.title,
        name: obj.carName,
        model: obj.model,
        price: obj.price,
        year: obj.year,
        description: obj.description,
    }
    return carAd;
}

