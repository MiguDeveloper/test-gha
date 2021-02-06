### ejecutar un solo test

si queremos ejecutar un solo test (it) dentro del describe podemo usar la bandera `it.only` y para ingnorar una prueba podemos usar `it.skip` los mismos podemos aplivarlo a los `describe`

Cuando comparamos objetos o arreglos tener cuidado con comparar posiciones de memoria y no el contenido por el ejemplo el uso de `toBe` y el de `toEqual` este ultimo sera mejor ya que nos permite comparar el valor.

```javascrip
describe('countVowel', () => {
  it('miguel devuelve {"a":0,"e":1,"i":1,"o":0,"u":1}', () => {
    expect(countVowelFast('miguel')).toEqual({ a: 0, e: 1, i: 1, o: 0, u: 1 });
  });
});
```
