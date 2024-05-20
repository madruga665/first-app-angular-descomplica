import { AbstractControl, ValidatorFn } from '@angular/forms';
// import { validateBr } from 'js-brasil/src/validate';


function validate_cpf(strCPF: any) {
  // Valida se tem apenas número, - ou .
  let precisaFicarVazio = strCPF.replace(/^[0-9.-]*$/gm, '')
  if (precisaFicarVazio != '')
    return false

  strCPF = strCPF.replace(/[^\d]+/g, '');
  if (strCPF.length !== 11) {
    return false;
  }

  //verifica se todos os numeros sao iguais
  const expIguais = /^(?!.*(\d)\1{10}).*$/;
  if (!strCPF.match(expIguais)) {
    return false;
  }

  return true;
}

export function validateCpf(): ValidatorFn {
  return (control: AbstractControl) => {
    const value = control.value;

    if (value === null) {
      return null;
    }

    const isCpf = validate_cpf(value);

    return isCpf ? null : { validateCpf: true };
  };
}
