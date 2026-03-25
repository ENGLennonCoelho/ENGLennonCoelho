# 📌 Nike | Automação e Eficiência Operacional

## 🎯 Contexto
Operação logística e comercial com alto volume de dados e dependência de processos manuais.

## 🚨 Problema
- Baixa eficiência operacional
- Retrabalho manual constante
- Baixa visibilidade dos dados
- Tempo elevado para tomada de decisão

## 🧠 Hipótese / Tese
Se automatizarmos a coleta e tratamento de dados operacionais, reduzimos erros humanos e aceleramos a tomada de decisão.

## 📊 Dados Utilizados
- Base de pedidos (SKU, volume, tempo)
- Logs operacionais
- SLA de processamento
- Dados de estoque e movimentação

Volume médio: +100 mil registros/dia

## ⚙️ Solução Técnica
- Criação de pipelines automatizados
- Dashboards para acompanhamento em tempo real
- Scripts para limpeza e padronização de dados

## 🛠️ Stack Tecnológica
Python | SQL | Excel | Power BI | Automação

## 📈 Resultado
+40% eficiência operacional
-25% falhas
Redução significativa de retrabalho
Decisão baseada em dados em tempo real

## 🧪 Como Foi Implementado Python e SQL 

### Python (ETL)
python
import pandas as pd

df = pd.read_csv("pedidos.csv")

df["tempo_processo"] = pd.to_datetime(df["fim"]) - pd.to_datetime(df["inicio"])

df_clean = df.dropna()

### SQL 
SQL 

SELECT

sku,

COUNT() as volume,

AVG(tempo_processo) as tempo_medio   

FROM pedidos

GROUP BY sku



