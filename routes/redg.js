const router = require("express").Router();
//import form model
const datas = require("../models/form_model.js");

//create first route --add form data to database
router.post("/post", async (req, res) => {
  try {
    const data = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    console.log(data)
    const newuser = new datas(data);
    //save this item in database
    newuser.save();
   res.status(200).send("inserted succesfully")
  } catch (err) {
    res.json(err);
  }
});

//create second route -- get data from database
router.get("/get", async (req, res) => {
  try {
    const newuser = await datas.find({});
    res.status(200).json(newuser);
  } catch (err) {
    res.json(err);
  }
});

//update item
router.put("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and update it
    const updateItem = await datas.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updateItem);
  } catch (err) {
    res.json(err);
  }
});

//Delete item from database
router.delete("/api/item/:id", async (req, res) => {
  try {
    //find the item by its id and delete it
    const deleteItem = await datas.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.json(err);
  }
});

//export router
module.exports = router;
