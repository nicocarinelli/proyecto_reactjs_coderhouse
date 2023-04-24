import { getDoc, doc } from "firebase/firestore";
import { db } from "..";
import { createAdapterProductFirestore } from "../../../adapter/productAdapter";

export const getProduct = (productId) => {

    return new Promise((resolve, reject) =>{
        const docRef = doc(db, 'products', productId)
    
        getDoc(docRef)
            .then((response) => {
                resolve(createAdapterProductFirestore(response))
            })
            .catch((error) => {
                reject(error)
            })
    })
}