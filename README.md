# gamestore
Store of hardwares, pc, machine!

npx create-next-app@latest

Coloque o nome da variavel e função um nome 
que todos usam por exemplo: precoMenor Errado | menorPreco Correto


Notas: 
    Cria um layout boxed tudo com a mesma largura
```
@layer components {
  .container {
    @apply max-w-7xl mx-auto px-10;
  }
}

```

Cria modulo puro
  nest g co produto --flat --no-spec
  nest g co pedido --flat --no-spec
  nest g co db --flat --no-spec
