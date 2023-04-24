export const createAdapterProductFirestore = (doc) => {
    const data = doc.data()

    const productAdapted = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        type: data.type,
        category: data.category,
        stock: data.stock,
        description: data.description
    }
    
    return productAdapted
}