


export function inputTimeMask(value: string){
  const newValue = value.replace(/^(\d{2})(\d)/, '$1:$2');
  return newValue;
}