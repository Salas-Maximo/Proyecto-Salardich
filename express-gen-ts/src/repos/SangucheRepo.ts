import { ISanguche } from '@src/models/Sanguche';
import { getRandomInt } from '@src/util/misc';
import { SangucheModel } from './Mongoose';


// **** Functions **** //

/**
 * Get one sanguche.
 */
async function getOne(id: number): Promise<ISanguche | null> {
  return new Promise<ISanguche | null>((resolve, reject) => {
    SangucheModel.findOne({ id: id }).then((sanguche: any) => {
      resolve(sanguche);
    })
    .catch((err: any) => {
      if (err) {
        reject(err);
      }
    });
  });
}

/**
 * See if a sanguche with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    SangucheModel.findOne({ id: id }).then((sanguche: any) => {
      if(sanguche){
        resolve(true);
      }else{
        resolve(false);
      }
    })
    .catch((err: any) => {
      if (err) {
        reject(err);
      }
    })
  });
}

/**
 * Get all sanguches.
 */
async function getAll(): Promise<ISanguche[]> {
  return new Promise<ISanguche[]>((resolve, reject) => {
    SangucheModel.find({}).then((sanguches: any) => {
      resolve(sanguches);
    }).catch((err: any) => {
      if (err) {
        reject(err);
      }
    });
  });
}

/**
 * Add one sanguche.
 */
async function add(sanguche: ISanguche): Promise<void> {
  sanguche.id = getRandomInt();
  return new Promise<void>((resolve, reject) => {
    SangucheModel.insertMany(sanguche).then((res: any) => {
      console.log('Sanguche added');
      console.log(res);
      resolve()
    })
      .catch((err: any) => {
      if (err) {
        reject(err);
        return;
      }
    });
  });
}

/**
 * Update a sanguche.
 */
async function update(sanguche: ISanguche): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    SangucheModel.updateOne({ id: sanguche.id }, sanguche).then(() => resolve()).catch((err: any) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
}

/**
 * Delete one sanguche.
 */
async function delete_(id: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    SangucheModel.deleteOne({ id: id }).then(() => resolve()).catch((err: any) => {
      if (err) {
        reject(err);
      }
      resolve();
    })});
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
