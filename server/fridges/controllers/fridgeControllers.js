import { auth, db } from "../../configs/firebaseConfig.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {doc, setDoc, getDoc, getDocs, query, where, collection} from "firebase/firestore";

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
        const user = auth.currentUser;
        if (user.uid == req.params.uid) {
            const q = query(collection(db, "items"), where("owner", "==", user.uid));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
            res.send(querySnapshot);
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

const addItem = async (req, res) => {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        const itemId = generateRandomString(20);
        // if (user) {
        //     res.send(user.uid);
        // }
        console.log(user.uid);
        console.log(req.params.uid);
        console.log(user.uid === req.params.uid);
        if (user.uid == req.params.uid) {
            const item ={
                name: req.body.name,
                quantity: req.body.quantity,
                expiration: req.body.expiration,
                buyDate: req.body.buyDate,
                owner: user.uid,
                location: req.body.location
            }

            await setDoc(doc(db, "items", itemId), item);
            res.send("add a item!");
        } else {
            res.send("user not found");
        }
        
    } catch (error) {
        console.log(error.message);
    }
    
}

const updateItem = async (req, res) => {
    res.send("update a item!");
}

const deleteItem = async (req, res) => {
    res.send("delete a item!");
}

export default {
    getAllItems,
    getItem,
    addItem,
    updateItem,
    deleteItem
}