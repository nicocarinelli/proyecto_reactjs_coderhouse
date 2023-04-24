export const createAdapterTypesFirestore = (doc) => {
    const data = doc.data()

    const typesAdapted = {
        id: doc.id,
        slug: data.slug,
        label: data.label,
    }
    
    return typesAdapted
}