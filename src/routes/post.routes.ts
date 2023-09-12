
// Importez express et les types associés
import express, { Request, Response, Router } from "express"; 

// Utilisez les types pour le routeur
const router: Router = express.Router(); 


// Utilisez les types Request et Response
router.get("/", (req: Request, res: Response) => { 
    res.json({ message: "Voici les données" });
});


// Utilisez les types Request et Response
router.post("/", (req: Request, res: Response) => { 
    console.log(req.body);
    res.json({ message: req.body.message });
});


// Utilisez les types Request et Response
router.put("/:id", (req: Request, res: Response) => { 
    res.json({ messageID: req.params.id });
});


// Utilisez les types Request et Response
router.delete("/:id", (req: Request, res: Response) => { 
    res.json({ message: "Le post est supprimé " + req.params.id });
});

// Utilisez les types Request et Response
router.get("/add/:nom", (req: Request, res: Response) => { 
    res.json({ message: "Voici les données" });
});


// Utilisez "export =" pour l'exportation
export = router; 
