---
title: Czym jest protokół Tornado Cash?
author: Kacper Pajak
authorLink: https://www.linkedin.com/in/kacper-pajak-485a4721b/
path: 'tornado-cash'
date: 2022-08-27
category: 'DeFi'
tags: ['DeFi', 'Decentralized', 'Finance', 'Development', 'Privacy', 'Tornado anonymity']
image: '/blog/previews/tornado-cash.webp'
summary: 'Tornado Cash jest zdecentralizowanym, rozwiązaniem zapewniającym prywatność, opartym na zk-proofs opartej na blockchainie Ethereum. Umożliwia użytkownikom zerwanie połączeń pomiędzy  transakcjach w łańcuchu i zwiększenie anonimowości transakcji między adresami wpłat i wypłat.'
---

# Czym jest protokół Tornado Cash?

Tornado Cash jest zdecentralizowanym, rozwiązaniem zapewniającym prywatność, opartym na zk-proofs opartej na blockchainie Ethereum. Umożliwia użytkownikom zerwanie połączeń pomiędzy  transacccckcjach w łańcuchu i zwiększenie anonimowości transakcji między adresami wpłat i wypłat.

Tornado Cash to zdecentralizowany protokół przeznaczony do  przeprowadzania prywatnych transakcji na sieci Ethereum. Protokół ten pomaga rozwiązać problem prywatności w Ethereum, ponieważ za każdym razem, gdy kupujesz lub sprzedajesz w tej sieci, twoje transakcje są publiczne. To nie tak, że zostanie opublikowany Twoje imię i nazwisko w eksploratorze blockchaina sieci Ethereum - Etherscan, ale Twój adres tak i będzie podane szczegóły transakcji. Z tego powodu Ethereum jest uważane za pseudonimowe. Jeśli jednak obserwator może połączyć Cię z adresem portfela, może Cię śledzić za pomocą narzędzi badawczych, takich jak już wspomniny Etherscan.

Przez to mogą tacy obserwatorzy śledzić źródło twoich środków, balans etherów i tokenów na twoim adresie oraz twoje transakcje. Mogą analizować twoją działalność na Blockchainie włączając w to całą historię transakcji. Jest tak z powodu transparętności, upublicznienia całej aktywności na Ethereum.

Dlatego właśnie Tornado Cash wprowadził transakcje prywatne. Istnieją po to, by służyć tym, którzy chcą anonimowości i pełnej prywatności. Dlatego jeśli do tych osób, które nie lubią, gdy inni podglądają ich transakcje, możesz być zainteresowany tym, narzędziem, które ma do zaoferowania Tornado Cash.

## Jak Tornado Cash osiąga prywatność?

Tornado Cash  osiąga swój cel stworzenia prywatnych transakcji poprzez zerwanie połączenia w łańcuchu między odbiorcą, a nadawcą transakcji. Nadawca wpłaca swoje  Ethereum na adres smart contractu, na który jest zgromadzone pełno Etherum od innych urzytkowników tego protokoł, a następnie wypłaca je na adres osoby, do której chce je wysłać anonimowo.  Dlatego za każdym razem, gdy użytkownik wypłaci ETH na nowy adres, obserwator nie może powiązać wypłaty z depozytem.

W zasadzie Tornado Cash działa jak Proxy aby zachować anonimowość transakcji. Wykorzytują do tego dowody zk-SNARK, które oznaczają „Zero-Knowledge Succinct Non-Interactive Argument of Knowledge” czyli zwięzły nieinteraktywny argument wiedzy technologi dowodu z wiedzą zerową . zk-SNARKs Jest to forma hashowania, której także używa Zcash.

W przypadku protokołu kryptograficznego używającego zero-knowledge proofs zaangażowane są dwie strony – dowodzący  i weryfikator. Dowodzący stara się udowodnić hipotezę, podczas gdy weryfikator określa słuszność twierdzenia dowodzącego. Koncepcja dowodu z wiedzą zerową(zk-proofs) polega na tym, że można udowodnić posiadanie informacji lub np wystarczającej liczby środków bez jej ujawniania posiadanej sumy.

Na przykład, gdy dzwonisz do swojego dostawcy telefonu komórkowego, przedstawiciel może poprosić Cię o udowodnienie Twojej tożsamości poprzez przedstawienie czterech ostatnich cyfr Twojego numeru ubezpieczenia społecznego. W takim przypadku ostatnie cztery cyfry są wystarczającym dowodem bez ujawniania pełnego numeru ubezpieczenia społecznego (co może narazić Cię na kradzież tożsamości).

## Secret

Kiedy więc użytkownicy deponują ETH na ades smart contractu Tornado Cash, generują również 'note' - notkę zwana sekretem, note. Hash sekretu, który użytkownik wysyła wraz z wpłatą na smart contract Tornado.

![tornado-cash-1](blog/assets/tornado-cash-image-1.png)

Smart contract dodaje środki na listę depozytów. A kiedy użytkownik chce wypłacić Ethereum, musi podać odpowiedni sekret, który odpowiada niewydanej wpłacie z listy depozytów Tornado Cash. Fantastyczne jest to, że technologia zk-SNARK wykonuje to monumentalne zadanie bez ujawniania konkretnej wpłaty odpowiadającej danemu Secre'towi. Smart contract sprawdza dowód i przekazuje depozyt na adres wypłaty w sposób, który uniemożliwia obserwatorowi, dopasowanie adresu odbiorcy i depozytariusza.Więc, Tornado Cash fundamentalnie miesza wpłaty i wypłaty, aby nie można ich było ze sobą połączyć

## Anonymity set

Przedstawienie zestawienia depozytariuszów jest niezbędne, ponieważ pokazują, ile depozytów oczekuje na wypłatę. Pokazuje również, ile depozytów może pochodzić z Twoich wypłat - są tej samej wielkości. Ponad to, proces wypłaty ma dwie opcje: Możesz użyć portfela kryptograficznego, takiego jak MetaMask lub coś, co nazywa się „Relayer”. Aby zachować anonimowość za pomocą MetaMask, musisz mieć nowy adres z ETH. Teraz, jeśli zastanawiasz się jak wypłacić ETH na nowy adresu, nie rezygnując z prywatności?

![tornado-cash-2](blog/assets/tornado-cash-image-2.png)

Zazwyczaj kupujesz ETH na CEX i dopiero później przenosisz go na swój adres który zarządzasz z pozycji portfela. Jednak pozostawiłoby to Twój adres ujawniony w łańcuchu bloków, głównie jeśli podałeś informacje Know Your Customer (KYC) na swojej giełdzie.Tak więc, ze względu na całkowitą prywatność, chcesz uniknąć tej opcji. W tym miejscu pojawia się Relayer. Wszystko, co musisz zrobić, to utworzyć nowy adres Ethereum i pozwolić zkSNARKs i Relayer zrobić resztę. Jedynym kosztem jest niewielka ilość ETH wymagana do pokrycia opłaty sieciowej.

## Cel używania Relayer'a

Dzięki działanią Relayerom możesz wypłacić pieniądze na adres na którym nie ma ETH. Tak więc za każdym razem, gdy nowy adres pobiera tokeny z Tornado Cash, nie ma możliwości powiązania go z depozytem. Ponadto programiści nie kontrolują Relayer'a, robi to społeczność. W związku z tym nie może zmienić żadnych danych dotyczących wypłaty.

## Wskazówki korzystania z Tornado Cash

1. Unikaj krótkiego okresu pomiędzy wpłatą, a wypłatą:

Łatwo rozpoznać sprawcę gdy wpłaca i zaraz potem wypłaca tę samą ilość środków na inny adres. Poczekaj aż do puli depozytów trafią Ethery od innych by podczas wypłaty twój depozyt nie był ostatnim wpłaconym. Tornado cash zaleca odczekać minimum 24h

2. Obchodzenie się z wielokrotnymi wpłatami z tego samego adresu:

Robiąc wiele wpłat można być łatwo rozpoznanym gdy nie zachowa się zasad potrzebnych do anonimowości.I: Realizuj wpłaty o różnych godzinach, najlepiej za dnia jak i nocą oraz w przeciągu kilku dni.II: wypłaty relazuj podobnie czasowo, ale w przyoadku wypłat rób to na różne adresy.

![tornado-cash-3](blog/assets/tornado-cash-image-3.png)

## Jak używać Tornado Cash

Po wpłacie depozyt do Tornado Cash, wygenerujesz losowy klucz (sekret) i zdeponujesz swoje Ethereum. Aby później dokonać wypłaty, będziesz musiał przedstawić dowód posiadania ważnego sekretu, aby uzyskać dostęp do wpłaty.

1. Zdeponuj środki
2. Zrealizuj wypłatę: Wprowadź sekret swojego depozytu i kliknij ikonę „Ustawienia”. Wybierz opcję portfela „MetaMask” i kliknij „Zapisz”. Wpisz swój adres i kliknij „Wypłać”. Następnie podpisz transakcję i poczekaj, aż zostanie wydobyta.
3. Wypłata za pomocą Relayer: Wprowadź sekret wpłaty, wprowadź swój adres i kliknij „Wypłać”.

![tornado-cash-4](blog/assets/tornado-cash-image-4.png)

## Audyt bezpieczeństwa

Firmy, które przeprowadziły audyty bezpieczeństwa smart contractu Tornado Cash to ABDK, Pessimistic i Zeropool.network

## Wniosek

Zwolennicy prywatności zawsze będą w konflikcie z regulatorami stanowymi. Jednostka chce być wolna, podczas gdy państwo chce mieć kontrolę. Informacja to władza, więc państwo zawsze będzie szukało jej więcej.Poza problemem nadgorliwych biurokratów, na Blockchainie czają się inne drapieżniki, takie jak agresywni marketingowcy lub przestępcy szukający  podatnych wielorybów, którzy przenoszą tokeny. Ale istnieje też ciemna strona prywatności. Zagłębiając się w w największe włamania do protokołów DeFi 2020, zobaczysz Tornado Cash jako usługę prania pieniędzy dla hakerów. Jednak w przeciwieństwie do agencji rządowych, które twierdzą inaczej, prywatność nie jest przeznaczona tylko dla przestępców. Istnieją uzasadnione powody, dla których obywatele powinni przeprowadzać transakcje online w pełnej prywatności, z dala od wścibskich oczu. Na szczęście istnieją platformy takie jak Tornado Cash. Moim zdaniem prywatność i anonimowość powinna być dana nam użytkowniką pieniądza, informacji czy internetów jako domyślna cecha.

