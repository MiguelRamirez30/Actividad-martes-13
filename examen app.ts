(() => {

  // === Declaración de Tipos Básicos ===
  let heroeUno: string = 'Bruce';
  let heroeDos: string = 'Clark';
  let hayAmenaza: boolean = false;

  // === Tuplas ===
  let heroesEnPareja: [string, string] = [heroeUno, heroeDos];
  let enemigoPrincipal: [string, number, boolean] = ['Lex Luthor', 5, true];

  // === Arreglos ===
  let equipoAliado: Array<string> = ['Wonder Woman', 'Aquaman', 'Shazam', 'Flash'];

  // === Enumeraciones ===
  enum NivelDeFuerza {
    Flash = 5,
    Superman = 100,
    Batman = 1,
    Aquaman = 0
  }

  // Mostrar un valor del enum
  console.log(`La fuerza de Superman es: ${NivelDeFuerza.Superman}`);

  // === Interfaces (para agregar variedad) ===
  interface Heroe {
    nombre: string;
    alias: string;
    fuerza: NivelDeFuerza;
  }

  const batman: Heroe = {
    nombre: 'Bruce Wayne',
    alias: 'Batman',
    fuerza: NivelDeFuerza.Batman
  };

  const superman: Heroe = {
    nombre: 'Clark Kent',
    alias: 'Superman',
    fuerza: NivelDeFuerza.Superman
  };

  // === Funciones ===
  function encenderBatiseñal(): string {
    return '¡Batiseñal encendida!';
  }

  function solicitarRefuerzos(): void {
    console.log('¡Necesitamos ayuda!');
  }

  // === Aserciones de Tipo ===
  let energia: any = '100';
  let longitudDeEnergia: number = (energia as string).length;
  console.log(`La longitud de la energía es: ${longitudDeEnergia}`);

})();
