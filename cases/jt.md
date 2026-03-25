# 🟡 J&T Express | Automação Logística

## 🎯 Problema
Análises demoradas e manuais

## 🐍 Código real

```python
import pandas as pd

df = pd.read_csv("dados_logistica.csv")

df["erro"] = df["peso_real"] - df["peso_sistema"]

alertas = df[df["erro"] > 2]

print(alertas)
