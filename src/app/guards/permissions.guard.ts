import { CanActivateFn } from '@angular/router';

export const permissionsGuard: CanActivateFn = () => {
  if (hasUser()) {
    return true;
  }
  alert('you dont permission');
  return false ; 
};
function hasUser(): boolean {
  return false;
}
 