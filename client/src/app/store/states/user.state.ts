import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from 'src/app/models/user.model';

/**
 * Feature name
 */
export const featureName = 'user';

/**
 * State
 */
export interface State extends EntityState<User> {
  needAuth: boolean;
  selectedId?: string;
  error?: any;
}

/**
 * Adapter
 */
export const adapter = createEntityAdapter<User>();

/**
 * Initial state
 */
export const initialState: State = adapter.getInitialState({
  needAuth: false,
});
