import RouteError from '@src/common/RouteError';
import HttpStatusCodes from '@src/common/HttpStatusCodes';

import SangucheRepo from '@src/repos/SangucheRepo';
import { ISanguche } from '@src/models/Sanguche';


// **** Variables **** //

export const SANGUCHE_NOT_FOUND_ERR = 'Sanguche not found';


// **** Functions **** //

/**
 * Get all users.
 */
function getAll(): Promise<ISanguche[]> {
  return SangucheRepo.getAll();
}

/**
 * Add one user.
 */
function addOne(user: ISanguche): Promise<void> {
  return SangucheRepo.add(user);
}

/**
 * Update one user.
 */
async function updateOne(user: ISanguche): Promise<void> {
  const persists = await SangucheRepo.persists(user.id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SANGUCHE_NOT_FOUND_ERR,
    );
  }
  // Return user
  return SangucheRepo.update(user);
}

/**
 * Delete a user by their id.
 */
async function _delete(id: number): Promise<void> {
  const persists = await SangucheRepo.persists(id);
  if (!persists) {
    throw new RouteError(
      HttpStatusCodes.NOT_FOUND,
      SANGUCHE_NOT_FOUND_ERR,
    );
  }
  // Delete user
  return SangucheRepo.delete(id);
}


// **** Export default **** //

export default {
  getAll,
  addOne,
  updateOne,
  delete: _delete,
} as const;
