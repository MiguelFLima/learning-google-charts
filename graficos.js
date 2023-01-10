function desenharGraficos() {
    // ======== PIZZA =========
  
    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'Categorias');
    tabela.addColumn('number', 'Valores');
    tabela.addRows([
      ['Educação', 2000],
      ['Transporte', 500],
      ['Lazer', 230],
      ['Saúde', 50],
      ['Cartão de Crédito', 900],
      ['Alimentação', 260],
    ]);
  
    var opcoes = {
      title: 'Tipos de Gastos',
      height: 500,
      width: 900,
      is3D: true,
      legend: 'labeled',
      pieSliceText: 'value',
      // colors: ['gray', 'red', 'yellow', 'blue', 'pink', 'purple']
      slices: {
        1: { color: 'grey' },
        2: { color: '#a6a6a6' },
        3: { color: 'grey' },
        4: { offset: 0.2 },
        5: { color: 'grey' },
      },
    };
  
    var grafico = new google.visualization.PieChart(
      document.getElementById('graficoPizza')
    );
    grafico.draw(tabela, opcoes);
  
    // ====== Linha =======
  
    tabela = new google.visualization.DataTable();
    tabela.addColumn('string', 'Mês');
    tabela.addColumn('number', 'Gastos');
    tabela.addRows([
      ['jan', 800],
      ['fev', 400],
      ['mar', 1100],
      ['abr', 400],
      ['mai', 500],
      ['jun', 700],
      ['jul', 1500],
      ['ago', 650],
      ['set', 850],
      ['out', 400],
      ['nov', 1000],
      ['dez', 720],
    ]);
  
    var opcoes = {
      title: 'Gastos/Mês',
      width: 650,
      height: 300,
      vAxis: {
        format: 'currency',
        gridlines: {
          count: 5,
          color: 'transparent', // poderia ser só count 0 => na versao atualizada nao some os numeros do eixo vertical
        },
      },
      legend: 'none',
      curveType: 'function',
    };
  
    var grafico = new google.visualization.LineChart(
      document.getElementById('graficoLinha')
    );
    grafico.draw(tabela, opcoes);
  
    // ======== COLUNA ========
  
    var tabela = google.visualization.arrayToDataTable([
      ['Mês', 'Entrada', 'Saída'],   
      ['jan', 2500, 1000],
      ['fev', 2000, 500],
      ['mar', 3000, 1300],
      ['abr', 1500, 1700],
      ['mai', 5000, 2250],
      ['jun', 3567, 3000],
      ['jul', 3452, 1468],
      ['ago', 1833, 5250],
      ['set', 3803, 5500],
      ['out', 1800, 1000],
      ['nov', 3569, 1500],
      ['dez', 3000, 1740],
    ]);
  
    var grafico = new google.visualization.ColumnChart(
      document.getElementById('graficoColuna')
    );
    grafico.draw(tabela);
  }
  