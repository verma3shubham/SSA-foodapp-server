const express = require("express");
const Menu = require("../model/Menu");
const router = express.Router();

const menuController = require("../controllers/menuControllers")


router.get('/',menuController.getAllMenuItems);
//get all menu items
// router.get('/',async(req,res)=>{
//     try{
//         const menus = await Menu.find({});
//         res.status(200).json(menus);

//     }catch(error){
//         res.status(500).json({message:error.message});
//     }
// });


// post a menu item
router.post("/", menuController.postMenuItem);

// delete a menu item
router.delete("/:id", menuController.deleteMenuItem);

// get single menu item
router.get("/:id", menuController.singleMenuItem);

// update single menu item
router.patch("/:id", menuController.updateMenuItem);

module.exports= router;