// 2
function sonlar(a, b, c) {
  if (a > b && a > c) {
    console.log("a eng katta son =", a);
  } else if (b > a && b > c) {
    console.log("b eng katta son =", b);
  } else {
    console.log("c eng katta son =", c);
  }
}

sonlar(12, 85, 366);


// 5

function tekshir(x) {
  if (x > 0) {
    console.log("Bu son musbat");
  } else {
    console.log("Bu son manfiy");
  }
}

function sonlar2(a, b, c) {
  tekshir(a);
  tekshir(b);
  tekshir(c);
}

sonlar2(7234, -234, -34);

// 6

function sonlar3(start, end) {
  let juft = 0;

  for (let i = start + 1; i < end; i++) {
    if (i % 2 === 0) {
      juft++;
    }
  }

  console.log("Juft sonlar =", juft);
}

sonlar3(4, 10);




// 7

function sonlar1(n1) {
  let num = 0;
  for (let i = 1; i <= n1; i++) {
    num += i;
  }
  console.log(num);
}
sonlar1(23);

// 10

function kiyim_tavsiyasi(temp) {
  if (temp < 0 && temp > -30) {
    console.log("Issiq kiyining");
  } else if (temp < -30) {
    console.log("Kochaga chiqmey qoyurin");
  } else {
    console.log("Shorts, T-shorts, tapki bilan da chiqurin");
  }
}
kiyim_tavsiyasi(22);

// 11

function faslni_aniqla(oy_raqami) {
  if (oy_raqami === 12 || 1 || 2) {
    console.log("Bu oy qish fasli");
  } else if (oy_raqami === 3 || 4 || 5) {
    console.log("Bu oy bahor fasli");
  } else if (oy_raqami === 6 || 7 || 8) {
    console.log("Bu oy yoz fasli");
  } else if (oy_raqami === 9 || 10 || 11) {
    console.log("Bu oy kuz fasli");
  }
}
faslni_aniqla(12);

// 12

function jarima_hisobla(limit, tezlik) {
  if (limit === 10 && tezlik > 20) {
    console.log("Kichik jarima");
  } else if (limit === 20 && tezlik > 40) {
    console.log("Ortacha jarima");
  } else if (limit === 40 && tezlik > 60) {
    console.log("Katta jarima");
  }
}

jarima_hisobla(40, 61);

// 14

function chegirma_narx(summa, status) {
  discount = 0;
  if (status === "bronza") {
    discount = (summa * 5) / 100;
  } else if (status === "kumush") {
    discount = (summa * 10) / 100;
  } else if (status === "oltin") {
    discount = (summa * 15) / 100;
  }
  return summa - discount;
}
console.log(chegirma_narx(123, "oltin"));


// 19

function soliq_hisobla(daromad){
soliq = 0;
soliq2 = 0;
soliq3 = 0;
if(daromad < 10000000){
    soliq = (daromad * 10) / 100;
    console.log("Soliq = ", soliq);
}else  if(daromad > 10000000 && daromad < 20000000){
    soliq2 = (daromad * 15) / 100
    console.log("Soliq = ", soliq2);
}else{
    soliq3 = (daromad * 20) / 100
    console.log("Soliq = ", soliq3);
    
}
}
soliq_hisobla(22000000)

// 1

function sonlar_ishorasi(a, b){
return a + b
}
console.log(sonlar_ishorasi(12,-4))

// 2 

function ildiz_soni(A, B, C) {
    let D = B * B - 4 * A * C; 

    if (D > 0) {
        return 2;
    } else if (D === 0) {
        return 1; 
    } else {
        return 0; 
    }
}


console.log(ildiz_soni(1, -3, 2)); 
console.log(ildiz_soni(1, 2, 1)); 
console.log(ildiz_soni(1, 0, 1));  