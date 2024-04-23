const express=require('express');
const router = express.Router();
const expansecontroller=require('../controllers/expensecontroller');

router.get('/',expansecontroller.expanseGet);

router.post('/add-expanse',expansecontroller.expansePost);

router.delete('/delete-expanse/:id',expansecontroller.expanseDelete);

module.exports=router;