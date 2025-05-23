const formulario = document.getElementById('form')
const comprarOutraVez = document.getElementById('comprarOutraVez')
function enviar() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const cpf = document.getElementById('cpf').value;
  const endereco = document.getElementById('endereco').value;
  const telefone = document.getElementById('telefone').value;
  const fornecedor = document.getElementById('fornecedor').value;
  const jogo = document.getElementById('jogo').value;
  const midia = document.getElementById('midia').value;

  if (!fornecedor || !jogo || !midia) {
    alert("Verifique os campos de Fornecedor, Jogo e Mídia");
    return;
  }

  const precos = {
    "God Of War": 199.90,
    "Hollow Knight: Silksong": 149.90,
    "Doom": 99.90,
    "Dragon Ball: Sparking! Zero": 249.90
  };

  let preco = precos[jogo] || 0;

  if (midia === "Física") {
    preco *= 0.90;
  }

  if (confirm(`O valor final é R$ ${preco.toFixed(2)}.\nDeseja finalizar a compra?`)) {
    document.getElementById('relatorio1').textContent = nome;
    document.getElementById('relatorio2').textContent = email;
    document.getElementById('relatorio3').textContent = cpf;
    document.getElementById('relatorio4').textContent = telefone;
    document.getElementById('relatorio5').textContent = endereco;
    document.getElementById('relatorio6').textContent = fornecedor;
    document.getElementById('relatorio7').textContent = jogo;
    document.getElementById('relatorio8').textContent = midia;
    document.getElementById('relatorio9').textContent = `R$ ${preco.toFixed(2)}`;

    document.getElementById('campo1').value = nome;
    document.getElementById('campo2').value = email;
    document.getElementById('campo3').value = cpf;

    alert("Compra concluída!");
  } else {
    for (let i = 1; i <= 9; i++) {
      const span = document.getElementById(`relatorio${i}`);
      if (span) span.textContent = "";
    }
    document.getElementById('campo1').value = "";
    document.getElementById('campo2').value = "";
    document.getElementById('campo3').value = "";

    alert("Compra cancelada.");
  }
}

function recarregar(){
  location.reload();
}

function gerar(pdf = false, print = false) {
  for (let i = 1; i <= 3; i++)
    document.getElementById(`relatorio${i}`).textContent = document.getElementById(`campo${i}`)?.value || "";

  const relatorio = document.getElementById('relatorio');
  relatorio.style.visibility = 'visible';
  relatorio.style.position = 'static';
  formulario.style.display = 'none'
  comprarOutraVez.style.display = 'block'

  if (pdf) html2pdf().from(relatorio).save();
  else if (print) window.print();
}
