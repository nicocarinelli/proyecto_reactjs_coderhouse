import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "..";
import { createAdapterProductFirestore } from "../../../adapter/productAdapter";

export const getProducts = (typeName) => {

    return new Promise((resolve, reject) =>{
        const collectionRef = typeName 
        ? query(collection(db, 'products'), where('type', '==', typeName))
        : collection(db, 'products')
    
        getDocs(collectionRef)
            .then((response) => {
                const productsAdapted = response.docs.map((doc) => {
                    return createAdapterProductFirestore(doc)
                })
                resolve(productsAdapted)
            })
            .catch((error) => {
                reject(error)
            })
    })
}