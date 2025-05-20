import { ValidatorFn, AbstractControl, FormArray } from '@angular/forms';

export const minFormArrayLength = (min: number): ValidatorFn => {
  return (control: AbstractControl) => {
    if (control instanceof FormArray && control.length < min) {
      return { minLengthArray: true };
    }
    return null;
  };
};
