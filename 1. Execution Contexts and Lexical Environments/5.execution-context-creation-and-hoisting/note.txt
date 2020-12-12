Ketika javascript melakukan hoisting
Artinya semua variabel dan fungsi bukan dipindah keatas, melainkan JavaScript engine sendiri.
Sudah mengeset memory (memory space) dari variable yang dibuat.

Makanya ketika javascript mengeksekusi line by line.
Variable dan fungsi tetap dapat diakses walaupun di console log dulu
Akan tetapi, value untuk variabel agak sedikit berbeda (undefined);

* NB : undefined artinya saya tidak tau valuenya apa (placeholder)
* Semua variabel di JavaScript di set undefined
* Sangat tidak disarankan ngoding ada hoistingnya (procedural saja seperti bahasa lainnya)