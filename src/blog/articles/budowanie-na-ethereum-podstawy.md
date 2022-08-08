---
title: 'Budowanie na Ethereum: Podstawy'
author: Adam Borkowski
authorLink: 'https://github.com/adbo'
path: 'budowanie-na-ethereum-podstawy'
date: 2022-05-03
category: 'Building'
tags: ['ETH', 'Ether', 'Ethereum', 'Development', 'decentralizacja']
image: '/blog/previews/eth.png'
summary: 'Blockchain to publiczna baza danych, modyfikowana i przechowywana na wielu komputerach w Internecie.'
---

# Podstawy

## Blockchain
Blockchain to publiczna baza danych, modyfikowana i przechowywana na wielu komputerach w Internecie.

"Block" oznacza bloki danych, a "chain" oznacza ich połączenie. Każdy blok danych posiada kryptograficzną referencję (odnośnik) do swojego poprzednika. To sprawia, że raz zapisane dane nie mogą się zmienić, ponieważ to wymagałoby modifikacji wszsytkich kolejnych bloków oraz zgody całej sieci.

Każdy komputer, który znajduje się w sieci, musi się zgodzić na nowy blok danych oraz blockchain jako całość. Te komputery są nazywane węzłami (Node) sieci. Węzły sieci często muszą ustalać między sobą kolejność bloków danych, tak aby każdy węzeł posiadał taką samą kopię blockchain, w tym celu korzystają ze specjalnego mechanizmu konsensusu.

Ethereum korzysta w tej chwili z mechanizmu "proof of work". Oznacza to, że każdy, kto chce dodać nowy blok danych, musi wykonać skomplikowane obliczenia, wymagające dużej ilości mocy obliczeniowej (czasu procesora). Wykonywanie tych obliczeń jest określane jako mining, a udane dodanie bloku danych do blockchain jest nagradzane walutą ETH.

Każdy nowo dodany blok danych jest rozsyłany w sieci do innych węzłów i weryfikowany, tak aby stan blockchain był taki sam dla wszystkich uczestników sieci.

## Ethereum
Ethereum to protokół (zestaw reguł) na którym, oparta jest otwarta platforma i blockchain pod tą samą nazwą. Ethereum został stworzony przez kanadyjskiego programistę rosyjskiego pochodzenia Vitalika Buterina. W 2013 roku Buterin przedstawił sam pomysł działania platformy, a już w 2015 roku platforma zaczęła oficjalnie działać. Walutą, którą posługują się uczestnicy platformy Ethereum, jest Ether (ETH).

## DAPP
Zdecentralizowana aplikacja (DAPP) to aplikacja zbudowana na zdecentalizowanej sieci składająca się z programu tzw. smart contract oraz interfejsu użytkownika. Na blockchainie Ethereum ”smart contracts” (patrz niżej) są jawne, a nawet możliwe jest używanie kodu dodanego przez innych. Przed nauką tworzenia zdecentralizowanych aplikacji powinieneś znać podstawy blockchaina oraz sieci Ethereum.

DAPP składa się z backendu, który jest zapisany i uruchamiany w zdecentralizowanej sieci, w odróżnieniu od tradycyjnych aplikacji, których backend działa na scentralizowanych serwerach.

DAPP posiada frontend — interfejs użytkownika, który może być napisany w dowolnym języku programowania. Najczęściej spotykane są webowe interfejsy użytkownika napisane z użyciem HTML, CSS i JavaScript. Frontend również może być hostowany w zdecentralizowanej sieci, służy do tego pamięć masowa taka jak IPFS.

## Smart Contract
Smart contract to program działający na blockchainie Ethereum. Taki program składa się z kodu oraz danych, które są przechowywane pod konkretnym adresem blockchain. Smart contract jest typem konta na blockchainie Ethereum. To oznacza, że ma swój adres, stan konta oraz może wykonywać transakcje w sieci.

Smart contract często jest porównywany do maszyny z colą. Analogicznie jak w przypadku maszyny oferującej napoje do smart contractu wnosimy opłatę oraz wybieramy jedną z dostępnych opcji (funkcji w kontrakcie), w odpowiedzi kontrakt wykonuje z góry zaprogramowaną sekwencję kroków.

Każdy może napisać swój smart contract i opublikować go w sieci. Wystarczy nauczyć się programować w języku służącym do definiowania smart contractów oraz posiadać nieco kryptowaluty ETH. Publikowanie własnego kontraktu jest transakcją w sieci blockchain, tak samo, jak przelanie waluty ETH pomiędzy portfelami. Jednakże opłata za publikację kontraktu jest istotnie wyższa i zależy od jego rozmiaru. Do tworzenia smart contracts w sieci Ethereum istnieją obecnie dwa języki: Solidity oraz Vyper. Kod napisany w jednym z tych języków musi być skompilowany przed opublikowaniem w sieci blockchain.

Smart contract może być traktowany jak otwarte API. Co oznacza, że możesz wywoływać inne kontrakty w swoim, co znacznie zwiększa dostępne możliwości. Kontrakt może nawet publikować inne kontrakty w sieci Ethereum.

Smart contract nie może nawiązać połączenia HTTP w celu pobrania czy zapisania danych z Internetu. Jest to celowy zabieg twórców, który ma zwiększyć bezpieczeństwo oraz decentralizację. Kolejnym ograniczeniem jest rozmiar kontraktu, który może wynieść maksymalnie 24 kb. Oba te ograniczenia można ominąć, za pomocą bardziej zaawansowanych pojęć takich jak oracles oraz The Diamond Pattern.

Źródła:
* https://ethereum.org/en/developers/docs/intro-to-ethereum/
* https://ethereum.org/en/developers/docs/dapps/
* https://ethereum.org/en/developers/docs/smart-contracts/
