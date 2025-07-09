function collatzLength(n) {
    let count = 1;
  
    for (; n !== 1; count++) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = 3 * n + 1;
      }
    }
  
    return count;
  }
  
  let enUzunZincir = 0;
  let hangiSayi = 0;
  
  for (let i = 1; i < 1000000; i++) {
    const uzunluk = collatzLength(i);
  
    if (uzunluk > enUzunZincir) {
      enUzunZincir = uzunluk;
      hangiSayi = i;
    }
  }
  
  console.log("En uzun zinciri başlatan sayı: " + hangiSayi);
  console.log("Zincir uzunluğu: " + enUzunZincir);
  