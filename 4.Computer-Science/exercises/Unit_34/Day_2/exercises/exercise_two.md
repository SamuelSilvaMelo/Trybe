**Exercício 2:** Exclua a regra anterior utilizando o parâmetro `-D`.

```bash
sudo iptables -D INPUT -p icmp -j REJECT
```
