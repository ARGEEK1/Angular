import { CanDeactivateFn } from '@angular/router';

export const withoutSaveGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (hasUser()) return true; 
  return confirm('You have unsaved changes');
};

const hasUser = (): boolean => false;
