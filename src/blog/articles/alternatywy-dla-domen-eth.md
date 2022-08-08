---
title: 'Alternatywy dla domen .eth'
author: Paweł Nowosielski
authorLink: 'https://github.com/pnowosie'
path: 'alternatywy-dla-domen-eth'
date: 2022-05-05
category: 'Domains'
tags: ['Domeny', '.eth', 'Ethereum', 'DNSSEC']
image: '/blog/previews/ens.png'
summary: 'Gdy myślimy o odpowiedniku usługi DNS w świecie web3 czyli ENS (Ethereum Name Service) pierwsza na myśli przychodzi końcówka .eth.'
---

# Alternatywy dla domen .eth

Gdy myślimy o odpowiedniku usługi DNS w świecie web3 czyli ENS (Ethereum Name Service) pierwsza na myśli przychodzi końcówka .eth. Jeśli jesteś użytkownikiem Twitter-a początek 2021 roku możesz kojarzyć z wysypem domen .eth w nick-ach użytkowników tego serwisu.

Natomiast czy wiesz, ze obecnie (2022r.) ENS wspiera wszystkie "stare" TLD, a więc końcówki domenowe. Jedną z pierwszych dodanych była końcówka `.xyz` również bardzo popularna, której przyjrzymy się w tym artykule. Jednak konfiguracja każdej innej domeny TLD będzie przebiegać  w ten sam sposób.

## Ale jakie są różnice z .eth

- `.eth` jest natywną końcówką (TLD) w ENS, a więc domeny rejestruje się tylko w ENS
- inne końcówki znane z www rejestrujemy w DNS i importujemy do ENS
- Domenę `.eth` musimy odnawiać w ENS skazując się na niełaskę cen gazu oraz płacimy więcej za krótsze nazwy
- import domeny DNS do ENSa jest operacją jednorazową, raz płatną

## Konfiguracja

Jeśli postanowiłeś powiązać swoją ulubioną domenę z fascynującym światem web3, gratuluję! Czeka cię jednak trochę wyzwań, które ten poradnik ma na celu złagodzić.

### Rejestracja domeny w DNS

Rzecz oczywista, ale kluczowa. Domenę musisz posiadać i mieć możliwość konfiguracji jej strefy DNS. Przykro mi nie przeniesiesz google.com do ENSa ;)


### DNSSEC z konkretnym algorytmem podpisu

Jeśli jesteśmy już przy rejestracji warto wybrać rejestratora, który ułatwi dalszy proces

**Obecnie polecam tych dostawców**
- [OVH](https://www.ovhcloud.com/pl/domains/)
- ...podziel się jeśli rejestrowałeś domenę u innego rejestratora

Twój rejestrator domeny powinien umożliwiać Ci skonfigurowanie DNSSEC dla swojej domeny.
I tu zaczyna się pierwszy i jedyny poważniejszy "schodek", podpis musi być wykonany przy użyciu algorytmu `RSA / Sha256`. Nie każdy rejestrator umożliwia taka głęboką konfiguracje, nie jest tez łatwo odnaleźć dokładniejsze informacje o DNSSEC przed rejestracją.

Bardzo przydatny okazuje się tutaj [Debugger DNSSEC](https://dnssec-debugger.verisignlabs.com) by przekonać się, ze wszystko jest ustawione jak trzeba.
![DNSSEC debugger](assets/ens-xyz-dns-debugger.jpg)


### Rekord TXT i adres Ethereum

Teraz jeszcze należy dodać rekord `TXT` do strefy DNS naszej domeny, która wskaże na adres naszego portfela.
Nazwa rekordu to `_ens.<twoja nazwa>.xyz`, wartość `a=0x12345...`, **uwaga** jest to `a=` nie sam adres.
![Rekord TXT](assets/ens-xyz-txt-record.jpg)


### Zaklep sobie nazwę w ENS

Teraz już z górki, zapraszam za mną razem z portfelem na stronę [ENS domains](https://app.ens.domains). Wyszukaj swoją domenę, połącz portfel i opłać.


### To nie jest opcja dla anonimowych ;)

Jeśli masz ochotę wysłać mi drobne na kawę teraz nie musisz już przepisywać adresu ;)
![Transfer na nazwę](assets/ens-xyz-metamask-transfers.jpg)

ENS umożliwia Ci powiązać jeszcze więcej osobistych informacji, dlatego bądź rozważny, powiąż tylko taki portfel, który chcesz by był z Tobą kojarzony.
![ENS i konta Social](assets/ens-xyz-text-records.jpg)
