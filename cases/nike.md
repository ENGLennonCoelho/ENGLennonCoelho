# 🟢 Nike | Engenharia de Dados e Automação

## 🎯 Problema
Dados descentralizados e alto volume de trabalho manual para geração de relatórios.

---

## ⚙️ Solução

- Integração de dados via SQL (Data Lake)
- Automação com Power Automate
- Dashboards Power BI

---

## 💻 Exemplo SQL

```sql
SELECT 
    pedido_id,
    SUM(valor) as receita,
    COUNT(*) as volume
FROM vendas
WHERE data >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY pedido_id
ORDER BY receita DESC;
