Asynchronous dalam JavaScript sebenarnya tidak sepenuhnya asynchorunous (bukan asynchronous callback).
Dalam artinya javascript mempunyai sebuah tampungan event bernama event queue

Misal :
Fungsi yang masih berjalan (stack) :
Global -> function a() -> function b()

Fungsi yang berada di dalam event queue (stack) :
Click handler -> AJAX get data

Dalam kasus diatas, fungsi yang harus bejalan harus diselesaikan dulu sebelum mengambil di dalam event queue

Untuk lebih jelas silahkan run code lalu klik event saat function wait 3 second masih berjalan