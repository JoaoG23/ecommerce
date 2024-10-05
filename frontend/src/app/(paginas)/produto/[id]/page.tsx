import { produtos } from "@/core";

export default function PaginaProduto(props: any) {
  const id = +props.params.id;
  const produto = produtos.find((produto) => produto.id == id);
  return (
    <div>
      <h1>
        Detalhes do Produto: {id}: {produto?.nome}
      </h1>
    </div>
  );
}
