import moment from 'moment';
import { ISanguche } from './Sanguche';


// **** Variables **** //

const INVALID_CONSTRUCTOR_PARAM = 'nameOrObj arg must a string or an object ' + 
  'with the appropriate user keys.';


// **** Types **** //

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  creaciones: Array<ISanguche>;
}


// **** Functions **** //

/**
 * Create new User.
 */
function new_(
  username?: string,
  email?: string,
  password?: string,
  creaciones?: Array<ISanguche>,
  id?: number, // id last cause usually set by db
): IUser {
  return {
    id: (id ?? -1),
    username: (username ?? ''),
    email: (email ?? ''),
    password: (password ?? ''),
    creaciones: (creaciones ? creaciones : []),
  };
}

/**
 * Get user instance from object.
 */
function from(param: object): IUser {
  if (!isUser(param)) {
    throw new Error(INVALID_CONSTRUCTOR_PARAM);
  }
  const p = param as IUser;
  return new_(p.username, p.email, p.password,p.creaciones, p.id);
}

/**
 * See if the param meets criteria to be a user.
 */
function isUser(arg: unknown): boolean {
  return (
    !!arg &&
    typeof arg === 'object' &&
    'id' in arg && typeof arg.id === 'number' && 
    'email' in arg && typeof arg.email === 'string' && 
    'username' in arg && typeof arg.username === 'string' &&
    'password' in arg && typeof arg.password === 'string'
  );
}


// **** Export default **** //

export default {
  new: new_,
  from,
  isUser,
} as const;
