%Calderon Peña David Alonso
%Ramos Felix Francisco Fernando
:-dynamic numeroDeJugadores/1.
:-dynamic progreso/1.
:-dynamic encarcelado/1.

imprimeListaJugadores:-numeroDeJugadores(X),writeln(X).
imprimeListaPosiciones:-progreso(X),writeln(X).

numeroDeJugadores([]).
progreso([]).
encarcelado(0).

ceros(0,[]):-!.
ceros(N,Lista):-
    Naux is N-1,
    append([0],Lista1,Lista),
    ceros(Naux,Lista1).

limpiarVariables:-
    retract(numeroDeJugadores(_)),
    assertz(numeroDeJugadores([])),
    retract(progreso(_)),
    assertz(progreso([])),
    retract(encarcelado(_)),
    assertz(encarcelado(0)),
    writeln("Variables limpias.").


inicializarProgreso(N):-
    ceros(N,Rsp),
    retract(progreso(_)),
    assertz(progreso(Rsp)).

personasAJugar:-
    writeln("¿Cuantas personas van a jugar?"),
    read(X),
    jugadores(X,Res),
    retract(numeroDeJugadores(_)),
    assertz(numeroDeJugadores(Res)),
    inicializarProgreso(X).

jugadores(N, Lista):-
  findall(Num, between(1, N, Num), Lista).

tirarDados(Res):-
    random(1,7,Aux1),
    random(1,7,Aux2),
    append([Aux1],[Aux2],Res).

sumalimite(1, X, [H|Cuerpo], [Y|Cuerpo]):-
    Aux is H+X, Sum is Aux-63,
    (Aux>63, Y is 63-Sum),!;Y is H + X,!.
sumalimite(N, X, [H1|T1], [H1|T2]):-
    N1 is N -1,
    sumalimite(N1, X, T1, T2).

sumarDados([A,B],R):- R is A+B.

primerMovimiento(N,Lista):-
    obtenerValor(N, Lista, 0).

suertudo([A,B]):-A=:=5,B=:=6;A=:=6,B=:=5.
megaSuertudo([A,B]):-A=:=3,B=:=6;A=:=6,B=:=3.

suerte(N,Lista,Dados):-
    primerMovimiento(N,Lista),
    suertudo(Dados).

megaSuerte(N,Lista,Dados):-
    primerMovimiento(N,Lista),
    megaSuertudo(Dados).

boostParaSuertudo(N,Lista,Res):-
    write("El jugador "),
    write(N),
    write(" obtuvo 5 y 6 en los dados"),
    write(" en su primer lanzamiento,"),
    writeln(" entonces se delizó a la casilla 26."),
    sumandoParaSuertudo(N, 26, Lista,Res),
    retract(progreso(_)),
    assertz(progreso(Res)).

boostParaMegaSuertudo(N,Lista,Res):-
    write("El jugador "),
    write(N),
    write(" obtuvo 3 y 6 en los dados"),
    write(" en su primer lanzamiento,"),
    writeln(" entonces se delizó a la casilla 53."),
    sumandoParaSuertudo(N,53,Lista,Res),
    retract(progreso(_)),
    assertz(progreso(Res)).

sumandoParaSuertudo(1,X, [_|Cuerpo], [Y|Cuerpo]):-Y is X.
sumandoParaSuertudo(N,X, [H1|T1], [H1|T2]):-
    N1 is N -1,
    sumandoParaSuertudo(N1, X, T1, T2).

jugar:- personasAJugar,
    numeroDeJugadores(X),
    recorrerJugadores(X).

recorrerJugadores([]):-numeroDeJugadores(X),
    recorrerJugadores(X).
recorrerJugadores([H|T]):-
    jugadorTiraDados(H),
    recorrerJugadores(T).

jugadorTiraDados(N):-
    tirarDados(Rsp),
    sumarDados(Rsp,Res),
    write("El jugador numero "),
    write(N),
    write(" saco "),
    write(Res),
    write(" puntos al lanzar los dados "),
    write("obteniendo "),
    write(Rsp),
    writeln(" "),
    progreso(Prog),
   (suerte(N,Prog,Rsp),boostParaSuertudo(N,Prog,_),!;
    megaSuerte(N,Prog,Rsp), boostParaMegaSuertudo(N,Prog,_),!;
   (pozo(N),dobleSeis(Rsp),mover(N,Res),!;pozo(N),not(dobleSeis(Rsp)),mover(N,0),write("El jugador "),write(N),writeln(" necesita un par de seis para salir del pozo."),!;
   (verificar(N,Res,8),reubicarEn8o25(N,25),!;verificar(N,Res,25),reubicarEn8o25(N,8),!;
   (verificar(N,Res,51);verificar(N,Res,50),mover(N,Res),nuevoPrisionero(N),!);
   (not(encarcelado(N)),mover(N,Res),!);(mover(N,0),!)))),
   (puedoMovermeUnoMas(N),moverUnoMas(N,1),!;
    not(puedoMovermeUnoMas(N)),moverUnoMas(N,0),!),
    ((estaEnLa58(N),regresarALaUno(N)),!;true),
    (estaEnLa48(N),writeln("Doble turno"),jugadorTiraDados(N),!;
    true),
    imprimeListaPosiciones.

puedoMovermeUnoMas(N):-
    progreso(Progreso),
    obtenerValor(N,Progreso,Res),
    member(Res,[5,9,18,23,27,32,41,45,50,54,59]),!.

moverUnoMas(N,X):-
    progreso(Progreso),
    sumalimite(N,X,Progreso,Res),
    retract(progreso(_)),
    assertz(progreso(Res)),
    obtenerValor(N,Res,Rsp),
    ((X=:=1,write("El jugador "),
    write(N),
    write(" cayó en una casilla Oca Loca,"),
    write(" entonces se delizó una casilla más"),
    write(" quedando en la posición "),
    write(Rsp),writeln("."),!;true,!)).

mover(Jugador,Casillas):-
    progreso(X),
    sumalimite(Jugador,Casillas,X,Rsp),
    retract(progreso(_)),
    assertz(progreso(Rsp)),
    not(ganoJugador(Jugador,Rsp)).

ganoJugador(N,Lista):-
    obtenerValor(N,Lista,Res),
    (Res=:=63,write("Jugador "),
     write(N),
     write(" ha ganado."),progreso(X),writeln(X),
     limpiarVariables).

estaEnLa58(N):-
    progreso(Progreso),
    obtenerValor(N,Progreso,58).

regresarALaUno(N):-
    write("El jugador "),
    write(N),
    write(" cayó en la casilla 58,"),
    writeln(" entonces se devolvió a la casilla 1."),
    progreso(Progreso),
    sumandoParaSuertudo(N,1,Progreso,Rsp),
    retract(progreso(_)),
    assertz(progreso(Rsp)).

estaEnLa48(N):-
    progreso(Progreso),
    obtenerValor(N,Progreso,48).

obtenerValor(1,[H|_],H):-!.
obtenerValor(N,[_|T],Res):-
    Naux is N-1,
    obtenerValor(Naux,T,Res).

dobleSeis([6,6]).

pozo(N):-
    progreso(X),
    obtenerValor(N,X,31).

verificar(N,SumaDeDados,ProxRes):-
    progreso(X),
    obtenerValor(N,X,Resp),
    ProxRes=:=SumaDeDados+Resp.

reubicarEn8o25(N,Destino):-
  ((Destino=:=25,
    write("El jugador "),
    write(N),
    write(" cayó en la casilla 8,"),
    writeln("entonces se deslizó a la casilla 25."),!;
    write("El jugador "),
    write(N),
    write(" cayó en la casilla 25,"),
    writeln("entonces se deslizó a la casilla 8."),!)),
    progreso(X),
    sumandoParaSuertudo(N,Destino,X,Rsp),
    retract(progreso(_)),
    assertz(progreso(Rsp)).

nuevoPrisionero(N):-
    retract(encarcelado(_)),
    assertz(encarcelado(N)),
    write("**************El nuevo prisionero es el jugador numero "),
    write(N),writeln("**************").














