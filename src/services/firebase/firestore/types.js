import { getDocs, collection } from "firebase/firestore";
import { db } from "..";
import { createAdapterTypesFirestore } from "../../../adapter/typesAdapter";

export const getTypes = () => {

    return new Promise((resolve, reject) =>{
        
        const collectionRef = collection(db, 'types')
        
        getDocs(collectionRef)
            .then((response) => {
                const typesAdapted = response.docs.map((doc) => {
                    return createAdapterTypesFirestore(doc)
                })
                resolve(typesAdapted)
            })
            .catch((error) => {
                reject(error)
            })
    })
}