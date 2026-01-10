export default function reactSwcShim() {
  return {
    name: 'vite:react-swc-shim'
  };
}

export function plugin() {
  return reactSwcShim();
}

export const transform = async (code) => code;
export const parse = () => null;
