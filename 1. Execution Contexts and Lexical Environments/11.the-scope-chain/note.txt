Kenapa function b menghasilkan 1

Karena execution context ada ikatan dengan outer environment

Dalam kasus ini :
Karena execution context function b (zona function b)
Mengarah ke outer environment global yang dimana mempunyai myVar = 1

Gampangannya seperti konsep ibu - anak:
anak mengarah outer environment ke ibu

Inilah yang dinamakan scope chain

BIG WORD ALERT
Scope : Where a variable is available in your code