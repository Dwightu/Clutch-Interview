import { Router } from "express";



const router=Router();

router.get('/',(req,res)=>{
    res.send("You made a routes!!!")
})


export default router;