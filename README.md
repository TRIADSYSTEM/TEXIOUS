## abrir git bash nesta pasta
## entrar na pasta principal
cd site/

## Instalar dependências

``` instalar ultima versao do npm
npm install npm -g

``` shell
npm run setup
```

## Instalar JQuery-UI
Ir para node_modules/jquery-ui
Executar:
npm install --save-dev grunt grunt-contrib-nodeunit grunt-contrib-uglify grunt-init grunt-cli load-grunt-tasks grunt-bowercopy grunt-compare-size grunt-contrib-concat grunt-contrib-csslint grunt-contrib-jshint grunt-contrib-qunit grunt-contrib-requirejs grunt-git-authors grunt-html grunt-jscs


**OBS.: Sempre execute o comando acima após um git pull**

## Executar projeto
```

Abra o browser no endereço: [127.0.0.1:8080](http://127.0.0.1:8080)

### Atualizar build automaticamente

Para deixar os arquivos atualizando automaticamente, deixe o comando abaixo executando:

```
npm run watch ou gulp watch