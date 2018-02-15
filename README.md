# Aplikacja "Astronauci kontra kosmici"

Zadanie polega na stworzeniu prostej aplikacji React-Native - gry "Austronauci kontra kosmici" (lub wariantu wykorzystujacego inny "motyw fabularny"). Chodzi o tę samą aplikację, którą tworzyli Państwo w ramach ćwiczeń na zajęciach.

Wymagania dotyczące aplikacji
Aplikacja powinna składać się z pojedynczego ekranu, na którym odbywa się cała rozgrywka:



Zachowanie poszczególnych elementów ekranu aplikacji powinno być następujące:

Pasek upływu czasu
Na samej górze ekranu powinien być widoczny pasek oznaczający czas pozostały na rozgrywkę.
Początkowo pasek powinien rozciągać się na całą szerokość ekranu (minus margines), a czas na rozgrywkę powinien wynosić 30 sekund.
W miarę upływu czasu pasek powinien proporcjonalnie się skracać, aż do całkowitego zniknięcia w momencie gdy czas się skończy. Aktualizacja długości paska powinna być na tyle częsta, żeby widoczny ruch paska sprawiał wrażenie płynnego.
Pasek powinien zmieniać barwę w zależności od pozostałego czasu: czerwony gdy zostało poniżej 1/4 czasu, pomarańczowy gdy zostało poniżej 1/2 czasu, zielony w pozostałych przypadkach. 
Po upływie czasu powinno zostać wyświetlone podsumowanie rozgrywki (patrz niżej).
Plansza z kraterami
Tuż pod paskiem upływu czasu powinna być widoczna plaszna z kraterami.
Plansza powinna rozciągać się na całą szerokość ekranu (minus margines) oraz wypełniać całą wysokość ekranu nie zajętą przez pozostałe elementy interfejsu.
Wewnątrz planszy powinno znajdować się kilka kraterów (szare koła z czarną obramówką) - przynajmniej cztery.
Kratery powinny znajdować się w losowych miejscach. Wystarczy, że kratery będą umieszczone jeden pod drugim, w losowych odległościach od bocznych krawędzi ekranu, ale mogą Państwo zaimplementować bardziej wyszukane metody losowania położenia.
Zawartość dla każdego z kraterów powinna zostać wylosowana. Z jednakowym prawdopodobieństwem: nic, astronauta lub kosmita.
Postać siedząca w kraterze powinna być przedstawiona w interfejsie za pomocą odpowiedniego obrazu.
Tapnięcie na krater powinno spowodować zniknięcie ("zabicie") znajdującej się w nim postaci i zwiększenie odpowiedniego licznika (patrz niżej). Tapnięcie na pusty krater nie ma efektu (poza ewentualną animacją sygnalizującą wykrycie tapnięcia).
Liczniki zabitych postaci
Pod planszą z kraterami powinny znajdować się dwa liczniki z odpowiednimi etykietami: licznik zabitych astronautów oraz licznik zabitych kosmitów.
W momencie rozpoczęcia rozgrywki oba liczniki powinny być ustawione na 0.
Każdorazowo kiedy gracz tapnie na krater zawierający postać (tym samym ją zabijając) licznik odpowiadający temu rodzajowi postaci powinien zostać zwiększony o 1.
Przycisk RESPAWN
Na samym dole ekranu powinien znajdować się przycisk.
Tapnięcie przycisku powinno spowodować zreinicjalizowanie planszy z kraterami, tzn. wylosowanie nowych pozycji dla kraterów i nowej zawartości dla każdego z nich.
Tapnięcie przycisku nie powinno wpływać na liczniki zabitych postaci ani na pasek upływu czasu.
Tapnięcie przycisku RESPAWN nie powinno przerywać rozgrywki, pozwala jedynie na nowe rozdanie kraterów i postaci, co umożliwia zdobycie kolejnych punktów.
Zakończenie rozgrywki
Rozgrywka kończy się w momencie gdy upłynie cały dostępny czas. W takiej sytuacji aplikacja powinna wyświetlić okienko (tzw. alert) informujące o zakończeniu rozgrywki.
Okienko powinno zablokować dostęp do głównego ekranu rozgrywki. Zamknięcie okienka poprzez tapnięcie poza jego obrębem nie powinno być możliwe.
Okienko powinno zawierać informację że skończył się czas przewidziany na rozgrywkę oraz opcjonalnie informację o liczbie zabitych astronautów i kosmitów.
Okienko powinno zawierać pojedynczy przycisk/akcję: RESTART. Tapnięcie tego przycisku powinno zamknąć okienko i przywrócić całą aplikację do stanu początkowego, rozpoczynając tym sany zupełnie nową rozgrywkę. Z punktu widzenia użytkownika efekt powinien być taki sam, jak gdyby aplikacja została zrestartowana.


Alternatywne "motywy fabularne"
Aplikacja może wykorzystywać inny wybrany przez Państwa motyw fabularny - nie muszą to być astronauci, kosmici, kratery ani zabijanie. Ważne jest, żeby zachowanie poszczególnych elementów interfejsu było takie jak w specyfikacji opisanej powyżej. Istotą zadania jest sprawdzenie, że opanowali Państwo mechanizmy pozwalające zaimplementować w/w zachowania.

Wymagania dotyczące kodu i formy przesyłania rozwiązań
Aplikacja powinna być zaimplementowana jako projekt React Native i powinno dać się ją uruchomić na emulatorze Android w taki sposób, w jaki robiliśmy to na komputerach laboratoryjnych (patrz rozdział Konfiguracja środowiska programistycznego).
Kod aplikacji powinien być wolny od błędów zgłaszanych przez ESLint (przy konfiguracji opisanej w rozdziale Dostrojenie ESLint do React Native).
Aplikacja powinna być wolna od blędów. W szczególności żadne działania użytkownika nie powinny prowadzić do pojawienia się czerwonego ekranu błędu, żółtych pasków z ostrzeżeniami (tzw. warningami), ani do zawieszenia się aplikacji.
Rozwiązanie powinno zostać przesłane jako katalog projektu React Native spakowany do pojedynczego pliku za pomocą narzędzia tar lub zip. 
Spakowany katalog nie powinien zawierać częsci, która powstaje w wyniku instalowania bibliotek npm (czyli podkatalogu node_modules) ani częsci będącej wynikiem budowania paczki na urządzenie Android (czyli podkatalogu android/app/build). Limit na rozmiar rozwiązania - 5 MB - uniemożliwi wysłanie rozwiązania zawierającego któryś z tych elementów (wystarczy je usunąć z katalogu projektu i spakować na nowo).
