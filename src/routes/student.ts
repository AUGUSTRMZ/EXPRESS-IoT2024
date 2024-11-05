// routes/usuarios.ts
import { Router } from "express";
import {
<<<<<<< HEAD
=======
  createStudent,
>>>>>>> 292b7b8 (Deploy)
  deleteStudent,
  getStudents,
  updateStudent,
} from "../controllers/student";

const router = Router();

// Regresa todos los alumnos en la base de datos

router.get("/", getStudents);
<<<<<<< HEAD
=======
router.post("/", createStudent);
>>>>>>> 292b7b8 (Deploy)
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);
export default router;
