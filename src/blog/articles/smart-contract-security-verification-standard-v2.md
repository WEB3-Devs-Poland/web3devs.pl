---
title: 'Smart Contract Security Verification Standard v2'
author: wh01s7
authorLink: 'https://twitter.com/wh01s7'
path: 'smart-contract-security-verification-standard-v2'
date: 2023-03-09
category: 'Security'
tags: ['security', 'scsvs', 'bestpractices', 'DeFi', 'smartcontracts', 'solidity', 'checklist']
image: '/blog/previews/smart-contract-security-verification-standard-v2.png'
summary: 'Poznaj gotową checklistę z zestawem najlepszych praktyk bezpieczeństwa dla smart contractów pisanych w solidity - Smart Contract Security Verification Standard. Zadbaj kompleksowo o bezpieczeństwo swojego projektu.'
---

```SCSVSv2 to szybki i łatwy sposób na znaczące zwiększenie bezpieczeństwa Twojego projektu.```

# Smart Contract Security Verification Standard v2

Cześć, nazywam się Paweł Kuryłowicz i jestem współzałożycielem firmy [Composable Security](https://composable-security.com/), która dba o bezpieczeństwo projektów opartych o smart contracts.

W dzisiejszym wpisie pokażę Ci zbudowaną przez nas checklistę z najlepszymi praktykami bezpieczeństwa dla projektów pisanych w Solidity, czyli [SCSVSv2](https://github.com/ComposableSecurity/SCSVS).


Po przeczytaniu tego artykułu:
 - zyskasz wiedzę odnośnie najlepszych praktyk bezpieczeństwa
 - dowiesz się kiedy i w jaki sposób wdrożyć SCSVS w swoim projekcie
 - nauczysz się w pełni wykorzystywać potencjał tego standardu
 - będziesz w stanie wynieść transparentność swojego projektu na nowy poziom

Brzmi dobrze? No to zaczynajmy.

![Team](blog/assets/smart-contract-security-verification-standard-v2_1.png)

## Czym jest SCSVSv2?

Link: https://github.com/ComposableSecurity/SCSVS

Smart Contract Security Verification Standard v2 jest rozbudowaną checklistą tworzoną przez specjalistów z zakresu bezpieczeństwa. Zawiera on 3 podstawowe rozdziały takie jak:

 - `General` - wspólne i ogólne problemy bezpieczeństwa obejmujące m.in. projektowanie, aktualizacje, polityki.

 - `Components` - kontrakty składające się na projekt, często używane wzorce z typowymi dla nich problemami bezpieczeństwa.

 - `Integrations` - komponenty, z którymi integruje się projekt, ogólne zalecenia i zagrożenia dla często stosowanych smart kontraktów.

Każdy z rozdziałów, zawiera kategorie poruszające bardzo konkretne obszary bezpieczeństwa. Poniżej znajdziesz listę aktualną na dzień pisania artykułu (15.02.2023):

 - G: General
    - G1: Architecture, design and threat modeling
    - G2: Policies and procedures
    - G3: Upgradeability
    - G4: Business logic
    - G5: Access control
    - G6: Communications
    - G7: Arithmetic
    - G8: Denial of service
    - G9: Blockchain data
    - G10: Gas usage & limitations
    - G11: Code clarity
    - G12: Test coverage
 - C: Components
    - C1: Token
    - C2: Governance
    - C3: Oracle
    - C4: Vault
    - C5: Bridge
    - C6: NFT
    - C7: Liquid staking
 - I: Integrations
    - I1: Basic
    - I2: Token
    - I3: Oracle

Standard ciągle jest rozwijany i aktualizowany zarówno przez nas jak i wspaniałą społeczność, która się zaangażowała. Jeśli interesuje Cię aktualna lista zajrzyj [tutaj](https://github.com/ComposableSecurity/SCSVS).

## Dla kogo Smart Contract Security Verification Standard v2?

Z standardu może korzystać wiele różnych grup do realizacji własnych celów:

`Architekci` – mogą wyznaczać wymagania bezpieczeństwa i identyfikować zagrożenia dla poszczególnych komponentów.

`Właściciele projektów` – mają możliwość zweryfikowania aktualnego stanu bezpieczeństwa swojego projektu lub tego z którym planują się zintegrować.

`Audytorzy` – systematyzują w dzięki niemu pokrywane obszary i mają szansę aktualizować własną metodykę pracy.

`Developerzy` – mogą budować w oparciu o najlepsze praktyki bezpieczeństwa. Pisać bezpieczny kod mając zidentyfikowane elementy na które należy uważać.

Każda z tych grup mając gotowe wytyczne oszczędza mnóstwo czasu.

## Dlaczego powinieneś korzystać z SCSVSv2 jako developer?

1. `Nie popełnisz błędu, które popełnili inni.`

  Checklista jest budowana w oparciu o przeprowadzane przez nas audyty oraz doświadczenia społeczności Blockchain Security.


2. `Staniesz się świadomym zagrożeń developerem i zwiększysz swoją wartość rynkową.`

  W najlepszych projektach bezpieczeństwo ma wysoki priorytet. Poszukiwani są ludzie, którzy wiedzą co robią i pomogą osiągnąć założone cele, minimalizując jednocześnie ryzyko wystąpienia problemów. Wykazując znajomość zagrożeń w jasny sposób budzisz zaufanie.


3. `Zaoszczędzisz czas`

  Jeśli ktoś już raz spisał co może pójść nie tak to nie ma sensu robić tego na nowo od zera. Warto jednak rozbudowywać takie checklisty i dostosowywać do własnych potrzeb.


4. `Czas audytorów wykorzystasz w najlepszy możliwy sposób.`

  Smart contract security review ma za zadanie możliwie efektywnie wykorzystać czas przeznaczony na testy by wykryć i opisać wszelkie problemy zidentyfikowane w kodzie. Wszystkie niedociągnięcia i brak zgodności z najlepszymi praktykami powinny zostać dokładnie opisane, tak by projekt miał ich pełną świadomość i w oparciu o to podjął decyzję co z nimi robi. Dlatego im więcej prostych i stosunkowo łatwych niedociągnięć tym mniej czasu pozostaje na skomplikowane wektory ataku.


5. `Będziesz wiedział dokładnie co było sprawdzane.`

  Firm audytorskich jak i samych audytorów jest coraz więcej. Wśród rozwiniętych projektów pojawią się już nawet grupy wyspecjalizowanych bezpieczników przeprowadzających wewnętrzne iteracje testów. Każda z tych grup ma jednak swoją własną unikalną metodykę, która w żaden sposób nie jest standaryzowana. Kupując audyt od Firmy X nie masz pewności czy szuka tego samego rodzaju problemów co Firma Y. Wymagając przejścia przez standard SCSVS w trakcie audytu, zyskasz pewność co do tego co było sprawdzane.

`Przede wszystkim, będziesz mógł pokazać społeczności i innym projektom, że kompleksowo zadbaliście o bezpieczeństwo.`

## W jaki sposób wdrożyć SCSVSv2?

#### Sposób 1:

Jeśli Twój kod będzie zaraz audytowany (wewnętrznie lub zewnętrznie) poproś dodatkowo o sprawdzenie zgodności z standardem Smart Contract Security Verification Standard v2.

To stosunkowo mały narzut dodatkowej pracy dla audytorów, jeśli właśnie przechodzą przez cały kod projektu, ponieważ część z tych checków prawdopodobnie sprawdzają w trakcie swojej pracy. Dodatkowy czas zajmuje jedynie wypełnienie dokumentu i kontakt z klientem w sprawie niektórych checków wychodzących poza zakres standardowego audytu.

Co otrzymasz w zamian? Świetne źródło informacji oraz pewność co do tego co było sprawdzane.

![Table_1](blog/assets/smart-contract-security-verification-standard-v2_2.png)

Na podstawie takiej tabeli jasno widać:
 - które obszary zostały odpowiednio zaadresowane,
 - które wymagają poprawy,
 - a które nie dotyczą danego projektu.

Pamiętaj, że to informacja nie tylko dla Ciebie, ale i dla całej Twojej społeczności!

Jednak tabela to nie wszystko, dostaniesz dokładną listę checków z komentarzami, które z nich nie zostały spełnione i dlaczego.

![Table_2](blog/assets/smart-contract-security-verification-standard-v2_3.png)

Czyż nie jest to skarbnica wiedzy dla Ciebie i Twojego zespołu?

#### Sposób 2:

Jeśli o bezpieczeństwo chcesz zadbać zdecydowanie wcześniej (co już bardzo dobrze rokuje dla bezpieczeństwa Twojego projektu!) użyj Smart Contract Security Verification Standard v2 jako wytycznych i wkładu do modelowania zagrożeń.

Projektuj w oparciu o najlepsze praktyki i nie popełniaj błędów, które miały miejsce w przeszłości.

Jak przeprowadzić takie modelowanie zagrożeń?

Przeczytaj przygotowany przeze mnie szczegółowy poradnik [Threat Modeling for Smart Contracts: Best Step-by-Step Guide](https://composable-security.com/blog/threat-modeling-for-smart-contracts-best-step-by-step-guide//).

## Podsumowanie

Mam nadzieję, że po przeczytaniu tego artykułu wypróbujesz tworzony przez nas standard i zadbasz o zwiększenie bezpieczeństwa swojego projektu. To potężne narzędzie, które może być wsparciem w wielu obszarach bezpieczeństwa.

Koniecznie daj nam znać co o nim sądzisz!

Jeśli masz co do niego jakiekolwiek pytania lub potrzebujesz wsparcia w zakresie bezpieczeństwa [napisz do nas](https://composable-security.com/contact/).