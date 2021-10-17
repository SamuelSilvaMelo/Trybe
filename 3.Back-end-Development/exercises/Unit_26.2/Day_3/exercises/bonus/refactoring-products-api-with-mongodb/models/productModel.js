const connection = require('./connection');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {
  try {
    const bd = await connection();
    const result = await bd.collection('products').insertOne({ name, brand });

    return { id: result.insertedId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const bd = await connection();
    const result = await bd.collection('products').find().toArray();

    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id) => {
  try {
    const bd = await connection();
    const result = await bd.collection('products').findOne(ObjectId(id));

    return result
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id, name, brand) => {
  try {
    const bd = await connection();
    await bd.collection('products').updateOne({ _id: ObjectId(id) }, { $set: { name, brand } })
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    
    const db = await connection();
    await db.collection('products').deleteOne({ _id: ObjectId(id) });

    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = {
  add,
  getAll,
  getById,
  update,
  exclude
};
