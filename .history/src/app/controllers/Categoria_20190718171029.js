import * as Yup from "yup";
import Categoria from "../models/categoria";

class CategoriaController {
  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const categoriaExists = await Categoria.findOne({
      where: { nome: req.body.nome }
    });
    if (categoriaExists) {
      return res.status(400).json({ error: "Categoria já cadastrada!" });
    }

    const categoria = await Categoria.create(req.body);

    return res.json(categoria);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: "Erro na validação" });
    }

    const { nome } = req.body;

    const categoria = await Categoria.findByPk(req.body.categoriaId);

    if (nome !== categoria.nome) {
      const categoriaExists = await Categoria.findOne({
        where: { nome: req.body.nome }
      });
      if (categoriaExists) {
        return res.status(400).json({ error: "Categoria já cadastrada!" });
      }
    }

    const categoriaAtualizada = await categoria.update(req.body);

    return res.json(categoriaAtualizada);
  }
}

export default new CategoriaController();
