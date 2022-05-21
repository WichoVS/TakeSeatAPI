const ItemMenu = require("./item-menu.model");

const GetItemsMenuByRestaurante = async (req, res, next) => {
  try {
    const idR = req.params._id;

    const Items = await ItemMenu.find({ Restaurante: idR }).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: Items,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const GetItemMenuById = async (req, res, next) => {
  try {
    const _params = req.params;

    const Item = await ItemMenu.findById({ _id: _params._id }).lean().exec();

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: Item,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const UpdateItemMenu = async (req, res, next) => {
  try {
    const _params = req.params;
    const _body = req.body;

    const itemNew = await ItemMenu.findByIdAndUpdate(
      { _id: _params._id },
      {
        Nombre: _body.Nombre,
        Descripcion: _body.Descripcion,
        Imagen: _body.Imagen,
        Costo: _body.Costo,
        Restaurante: _body.Restaurante,
        FechaModificacion: new Date(),
        Activo: _body.Activo,
        Especial: _body.Activo,
        Tipo: _body.Tipo,
      },
      {
        new: true,
      }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: itemNew,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const CreateItemMenu = async (req, res, next) => {
  try {
    const _body = req.body;

    const itemToCreate = await ItemMenu.create({
      Nombre: _body.Nombre,
      Descripcion: _body.Descripcion,
      Imagen: _body.Imagen,
      Costo: _body.Costo,
      Restaurante: _body.Restaurante,
      FechaCreacion: new Date(),
      FechaModificacion: null,
      Activo: true,
      Especial: _body.Especial,
      Tipo: _body.Tipo,
    });

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: itemToCreate,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

const ToggleActivoItemMenu = async (req, res, next) => {
  try {
    const idIM = req.params._id;

    const oldItem = await ItemMenu.findOne({ _id: idIM }).lean().exec();

    const newItem = await ItemMenu.findByIdAndUpdate(
      { _id: idIM },
      {
        Activo: !oldItem.Activo,
      },
      { new: true }
    );

    res
      .send({
        success: true,
        message: "Petición Exitosa",
        data: newItem,
      })
      .end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  GetItemsMenuByRestaurante,
  GetItemMenuById,
  UpdateItemMenu,
  CreateItemMenu,
  ToggleActivoItemMenu,
};
