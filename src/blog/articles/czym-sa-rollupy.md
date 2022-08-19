---
title: Czym są rollupy?
author: Sebastian Strzałkowski
authorLink: https://www.linkedin.com/in/sebastianstrzalkowski/
path: 'czym-sa-rollupy'
date: 2022-08-19
category: 'Privacy'
tags: ['ZKrollups', 'OptimisticRollups', 'Privacy', 'Rollups', 'Layer2']
image: '/blog/previews/czym-sa-rollupy.png'
summary: 'Czym są rollupy? Czym różnią się optymistyczne rollupy od zk rollupów?'
---

# Czym są rollupy?

Wyobraźmy sobie sytuację, w której korzystamy z usług pocztowych i próbujemy wysłać wiele paczek do jednego nadawcy. Możemy zapakować każdą paczkę osobno, nakleić na nią etykietę i wysłać. Będzie to jednak rozwiązanie, w którym zapłacimy wielokrotnie za dostarczenie czegoś w jedno miejsce. A co jeśli użyjemy większego pudełka i wyślemy je w cenie większej przesyłki już jako jedną paczkę? Z dużym prawdopodobieństwem będzie to tańsze rozwiązanie. Właśnie w ten sposób działają rollupy. Na rozwiązaniu obok L1 (Layer 1) przeliczamy wszystkie transakcje, a na koniec dopiero wynik tych transakcji ląduje w głównej sieci w jednej paczce. Dzięki temu rozwiązaniu możemy zaoszczędzić na opłatach prowizyjnych, ponieważ na sieci głównej płacimy tylko za jedną transakcję, a nie za większą liczbę, która została wykonana poza L1. Technicznie rozwiązanie to składa się z dwóch funkcji w sieci: depozytu (zablokowanie środków) i wypłaty (odblokowanie środków), które wykorzystujemy na warstwie 2. Transakcje i konwersje mogą być dokonywane off-chain lub na łańcuchu bocznym.

## Optymistyczny rollup

To podejście zakłada, że wszystkie dane, które pojawiają się w sieci są poprawne. Weryfikacja odbywa się poprzez dostarczenie dowodu oszustwa. Może ono nastąpić w każdej chwili i może być zgłoszone przez każdego użytkownika w dowolnym momencie. Użytkownik przyłapany na próbie fałszowania danych jest karany przez protokół, dlatego każdy użytkownik przed skorzystaniem z sieci musi zablokować swoje środki na danym protokole. W momencie zgłoszenia dowodów na oszustwo, rollup wchodzi w tryb rozstrzygania sporów. Jest to funkcja, która sprawdza, czy zgłoszenie jest poprawne i czy doszło do próby sfałszowania danych. Następnie transakcja jest symulowana w sieci głównej. Transakcja pozostaje, jeśli wszystko jest w porządku, jednak jeśli nie ma zgodności i wystąpiły błędy, wówczas następuje przywrócenie stanu poprzedniego i ukaranie użytkownika, który popełnił błąd.

Ze względu na sposób działania sieci i selektywne sprawdzanie transakcji (na życzenie użytkowników) zablokowane środki są niedostępne przez długi czas podczas wypłaty. Podobnie jest w przypadku wpłat do protokołu. Dzieje się tak dlatego, że sieć potrzebuje czasu na dostarczenie potencjalnych dowodów oszustwa.

Przykłady rozwiązań:
* [Arbitrum One](https://arbitrum.io/)
* [Optimism](https://www.optimism.io/)
* [Boba Network](https://boba.network/)

## Zero-knowledge rollups

Aby w pełni zrozumieć tę ideę, musimy wiedzieć, czym jest dowód zerowej wiedzy. Dowód zerowej wiedzy to procedura kryptograficzna, w której jedna strona może udowodnić drugiej, że posiada pewną informację, nie ujawniając jej. Przykład: mamy jaskinie. Między punktami C i D jest tajne przejście, które otwiera się tajnym hasłem. Jacek zna to hasło i chce przekonać o tym osobę Tomka, bez ujawniania hasła. Przeprowadza więc następujący eksperyment: Tomek stoi w punkcie A, podczas gdy Jacek wchodzi do jaskini, docierając do jednego z punktów C lub D. Gdy Jacek jest już w jaskini, Tomek przechodzi do punktu B i poleca Jackowi wyjście albo lewym, albo prawym korytarzem. Ponieważ Jacek zna hasło otwierające tajne przejście, nie ma problemów z wykonaniem instrukcji Toma. Procedura ta powtarza się kilkakrotnie.

W tego typu rollupie nie potrzebujemy założenia, że każda transakcja jest poprawna. To, czy transakcja jest poprawna, możemy udowodnić zrzucając dane do sieci głównej. Wszystkie obliczenia wykonywane są poza siecią główną i dopiero wyniki są tam zrzucane. Nazywa się to dowodem ważności.

Wadą tego rozwiązania jest problem z kompatybilnością maszyny wirtualnej Ethereum (EVM). Wykonanie wszystkich obliczeń, w porównaniu do poprzedniego rozwiązania nie jest takie proste. Aby w pełni zrozumieć ideę, polecam przeczytać [dowód zerowej wiedzy](https://en.wikipedia.org/wiki/Zero-knowledge_proof)

Przykłady rozwiązań:
* [dYdX](https://dydx.exchange/)
* [Loopring](https://loopring.org/)
* [zkSync](https://zksync.io/)
* [ZKSpace](https://zks.org/)

Źródła:
* https://ethereum.org/en/developers/docs/scaling/optimistic-rollups/
* https://ethereum.org/en/developers/docs/scaling/zk-rollups/
* https://developer.offchainlabs.com/docs/inside_arbitrum
* https://docs.zksync.io/userdocs/
* http://bazekon.icm.edu.pl/bazekon/element/bwmeta1.element.ekon-element-000171271907