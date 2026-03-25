#  J&T Express | Automação Logística

## 🎯 Contexto
Operação logística com alto volume e necessidade de controle de SLA.

## 🚨 Problema
- Atrasos frequentes
- Falta de visibilidade operacional
- Baixa previsibilidade

## 🧠 Hipótese / Tese
Se monitorarmos os dados logísticos em tempo real, conseguimos reduzir atrasos e otimizar rotas.

## 📊 Dados Utilizados
- Tempo de entrega
- Rota logística
- Volume de pedidos
- SLA

## 📈 Resultado
Redução de atrasos;
Aumento da previsibilidade;
Melhor controle operacional;

## 🛠️ Stack Tecnológica
SQL | Excel | Power BI

## ⚙️ Solução Técnica
- Monitoramento de indicadores
- Criação de alertas
- Dashboards operacionais

## 🐍 Código real

```python
import pandas as pd

df = pd.read_csv("dados_logistica.csv")

df["erro"] = df["peso_real"] - df["peso_sistema"]

alertas = df[df["erro"] > 2]

print(alertas)
