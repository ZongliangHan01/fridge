import { auth, db } from "../../configs/firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {doc, setDoc, getDoc, getDocs, query, where, collection, updateDoc, deleteDoc} from "firebase/firestore";
import redisClient from "../../utils/redisClient.js";

const generateRandomString = (length) => {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

}

const getAllItems = async (req, res) => {
    try {
        const auth = getAuth();
        const user = auth.currentUser || {};
        if (user.uid == req.params.uid) {
        // if (true) {
            const cacheData = await redisClient.get('fridgeItems:'+user.uid);
            if (cacheData) {
                console.log("cache hit");
                return res.send(JSON.parse(cacheData));
            }
            const q = query(collection(db, "items"), where("owner", "==", req.params.uid));
            const querySnapshot = await getDocs(q);
            const items = [];
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                items.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            res.send(items);
            await redisClient.setEx('fridgeItems:'+user.uid, 3600, JSON.stringify(items));
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

const getItem = async (req, res) => {  
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        const itemId = req.params.id;
        if (user.uid == req.params.uid) {
            const docRef = doc(db, "items", itemId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                res.send(docSnap.data());
            } else {
                console.log("No such document!");
            }
        }
    } catch (error) {
        console.log(error.message);
    }
    
}

const getFreezerItems = async (req, res) => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user.uid == req.params.uid) {
            const q = query(collection(db, "items"), where("owner", "==", user.uid), where("location", "==", "freezer"));
            const querySnapshot = await getDocs(q);
            const items = [];
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                items.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            res.send(items);
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

const getCoolerItems = async (req, res) => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user.uid == req.params.uid) {
            const q = query(collection(db, "items"), where("owner", "==", user.uid), where("location", "==", "cooler"));
            const querySnapshot = await getDocs(q);
            const items = [];
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                items.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            res.send(items);
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

const addItem = async (req, res) => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        const itemId = generateRandomString(20);
        // if (user) {
            // res.send(user.uid);
        // }
        // console.log(user.uid);
        // console.log(req.params.uid);
        // console.log(user.uid === req.params.uid);
        if (user.uid == req.params.uid) {
        // if (true) {
            const item ={
                name: req.body.name,
                quantity: req.body.quantity,
                expiration: req.body.expiration,
                buyDate: req.body.buyDate,
                owner: req.params.uid,
                location: req.body.location
            }

            await setDoc(doc(db, "items", itemId), item);
            res.send("add a item!");
            await redisClient.del('fridgeItems:'+user.uid);

        } else {
            res.send("user not found");
        }
        
    } catch (error) {
        console.log(error.message);
    }
    
}

const updateItem = async (req, res) => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        if  (user.uid == req.params.uid) {
        // if (true) {
            const itemRef = doc(db, "items", req.params.id);
            await updateDoc(itemRef, {
                quantity: req.body.quantity,
                location: req.body.location
            })
        }
        res.send("update a item!");
        await redisClient.del('fridgeItems:'+user.uid);

    } catch (error) {
        console.log(error.message);
    }
    
}

const deleteItem = async (req, res) => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user.uid == req.params.uid) {
        // if (true) {
            const itemRef = doc(db, "items", req.params.id);
            await deleteDoc(itemRef);
            res.send("delete a item!");
            await redisClient.del('fridgeItems:'+user.uid);
        } else {
            res.send("user not found");
        }
        
    } catch (error) {
        console.log(error.message);
    }
    
}

export default {
    getAllItems,
    getItem,
    addItem,
    updateItem,
    deleteItem, 
    getFreezerItems,
    getCoolerItems
}