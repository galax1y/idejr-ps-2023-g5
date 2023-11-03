import borders from '@/styles/borders.module.css';

export function getBorderClassByColor(color: string) {
  if (color === '#3B6388') return borders.blue;
  else if (color === '#3B8863') return borders.green;
  else if (color === '#AD3F3F') return borders.red;
  else return borders.purple;
}

export function getBorderClassByType(type: string) {
  if (type === 'AGUA') return borders.blue;
  else if (type === 'PLANTA') return borders.green;
  else if (type === 'FOGO') return borders.red;
  else return borders.purple;
}