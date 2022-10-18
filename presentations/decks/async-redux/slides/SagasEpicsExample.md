* Sequenzieller ablauf
* wenn ein dings auf die Bretter geht, soll der rest nicht gemacht werden und was schon geschehen ist, wieder zurück gerollt werden

place an order
-> order überprüfen 
-> buy
-> paymentprocess (external)
-> revieved payment (ping server continually)
-> empty cart
-> say thank you

cancellation
-> takeLatest -> abort last request