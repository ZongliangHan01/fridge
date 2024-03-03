

const getAllItems = async (req, res) => {
    res.send("get all items!");
}

const getItem = async (req, res) => {  
    res.send("get a item!");
}

const addItem = async (req, res) => {
    res.send("add a item!");
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