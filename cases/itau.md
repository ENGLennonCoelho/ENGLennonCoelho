# 📌 Itaú | Estruturação de Dados e Governança

## 🎯 Contexto
Ambiente corporativo com grande volume de dados e baixa padronização.

## 🚨 Problema
- Dados inconsistentes
- Falta de governança
- Baixa confiabilidade
- Retrabalho analítico

## 🧠 Hipótese / Tese
A criação de um modelo estruturado de dados melhora a confiabilidade e reduz esforço manual.

## 📊 Dados Utilizados
- Bases financeiras
- Logs transacionais
- Dados históricos de operações

## ⚙️ Solução Técnica
- Modelagem de dados
- Padronização de tabelas
- Criação de queries otimizadas
- Construção de dashboards executivos

## 📈 Resultado
Aumento da confiabilidade dos dados;
Redução de retrabalho;
Ganho de velocidade analítica;
Base estruturada para decisões estratégicas.

## 🛠️ Stack Tecnológica

SQL | Python | Data Modeling | Power BI

## 🧪 Implementação

### SQL
```sql
SELECT 
    cliente_id,
    SUM(valor_transacao) as total
FROM transacoes
GROUP BY cliente_id
Python
df.groupby("cliente_id")["valor"].sum()


