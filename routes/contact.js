const express = require('express');
const router = express.Router();
const controllers = require('../controllers/contactController')

router.get('/',controllers.getContacts);
router.post('/',controllers.postContact);
router.get("/:id",controllers.getContact);
router.delete('/:id' , controllers.deleteContact);
router.put("/:id" , controllers.updateContact);

module.exports= router