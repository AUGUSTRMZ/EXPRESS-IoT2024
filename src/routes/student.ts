// routes/usuarios.ts
import { Router } from "express";
import {
  deleteStudent,
  getStudents,
  updateStudent,
} from "../controllers/student";

const router = Router();

// Regresa todos los alumnos en la base de datos

router.get("/", getStudents);
router.delete("/:id", deleteStudent);
router.put("/:id", updateStudent);
export default router;
