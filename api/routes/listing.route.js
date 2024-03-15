import express from 'express';
import { deleteListing,createListing ,updateListing, getListings} from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);
router.get('/get' , getListings);
router.delete('/delete/:id',verifyToken, deleteListing);
router.post('/update/:id',verifyToken,updateListing);
export default router;